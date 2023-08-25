import { TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

describe('AdminComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule],
            declarations: [AdminComponent],
        });
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AdminComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
