import { DetailsPageModule } from './details-page.module';

describe('DetailsPageModule', () => {
  let detailsPageModule: DetailsPageModule;

  beforeEach(() => {
    detailsPageModule = new DetailsPageModule();
  });

  it('should create an instance', () => {
    expect(detailsPageModule).toBeTruthy();
  });
});
