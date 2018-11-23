/*CORE*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { debounce, filter, flatMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/*SERVICES*/
import { ContractService } from '../../services/contract.service';
/*UTILS*/
import { AutoUnsubscribe } from '../../decorators/auto-unsubscribe';
import { Contract } from '../../models/contract';
import { ToastrService } from '../../modules/toastr/toastr.service';

// import {Compiler} from '../../models/compiler.model';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
@AutoUnsubscribe('_subsArr$')
export class ContractComponent implements OnInit {
  compilerVersion$: Observable<string> = this.contactService.getCompilerVersion();
  contract: Contract;

  form: FormGroup = this.fb.group({
    address: ['', Validators.required, Validators.minLength(42), Validators.maxLength(42)],
    contract_name: ['', Validators.required],
    // optimization: [true, Validators.required],
    source_code: ['', Validators.required],
  });

  // compiler_version: ['', Validators.required],
  // abi: [''],
  // compilers: any[] = [];

  private _subsArr$: Subscription[] = [];


  constructor(private _activatedRoute: ActivatedRoute, private fb: FormBuilder, private contactService: ContractService, private toastrService: ToastrService) {
    /*this.contactService.getCompilersList().subscribe((value: any) => {
      this.compilers = value.builds.map((item: Compiler) => {
        if (item.prerelease && item.prerelease.length > 0) {
          return item.version + '-' + item.prerelease + '+' +  item.build;
        } else {
          return item.version;
        }
      }).reverse();
    });*/
  }

  ngOnInit() {
    this._subsArr$.push(
      this._activatedRoute.queryParamMap.pipe(
        filter((params: ParamMap) => params.has('address'))
      ).subscribe((params: ParamMap) => {
        const addr = params.get('address');
        if (addr.length === 42) {
          this.getContract(addr);
          this.form.patchValue({
            address: addr
          });
        } else {
          this.toastrService.warning('Contract address is invalid');
        }
      })
    );
  }

  getContract(addrHash: string) {
    this._subsArr$.push(this.contactService.getContract(addrHash).subscribe((contract: Contract) => {
      if (!contract) {
        this.toastrService.danger('Contract address not found');
      } else {
        this.contract = contract;
      }
    }));
  }

  onSubmit() {
    if (!this.form.valid) {
      this.toastrService.danger('Some field is not correct');
      return;
    }
    const data = this.form.getRawValue();
    this.contactService.compile(data).subscribe((contract: Contract) => {
      this.contract = contract;
      if (this.contract.valid) {
        this.toastrService.success('Contract has been successfully verified');
        this.form.reset();
      }
    });
  }
}