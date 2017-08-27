import { TestChatAppPage } from './app.po';

describe('test-chat-app App', () => {
  let page: TestChatAppPage;

  beforeEach(() => {
    page = new TestChatAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
