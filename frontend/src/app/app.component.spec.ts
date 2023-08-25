import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';

describe('AppComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [AdminModule],
            declarations: [AppComponent],
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Pontuação Uniformes'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Pontuação Uniformes');
    });
});
