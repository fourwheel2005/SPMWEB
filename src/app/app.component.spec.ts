import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the correct title property', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SPMWEB');
  });

  it('should render title inside an h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('Hello, SPMWEB');
  });

  it('should have logo or favicon loaded in the DOM', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const favicon = document.querySelector("link[rel='icon']");
    expect(favicon?.getAttribute('href')).toBe('favicon.ico');
  });

  it('should have <app-root> as root component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const rootEl = fixture.debugElement.nativeElement.tagName.toLowerCase();
    expect(rootEl).toBe('app-root');
  });
});
