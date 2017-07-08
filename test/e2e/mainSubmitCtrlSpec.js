describe('Protractor shmcc_app title', function() {
  it('should have a title', function() {
    browser.get('http://192.168.1.126:3000/');

    expect(browser.getTitle()).toEqual('上海移动PS业务查询系统');
  });
});

// spec.js
describe('Protractor shmcc_app signin', function() {
  it('should pass the signin', function() {
    browser.get('http://192.168.1.126:3000/');

    expect(element(by.id('greeting')).isPresent()).
        toBe(true); 
    expect(element(by.id('greeting')).getText()).toEqual('Hi, please login first. LogIn'); 
    element(by.model('user.username')).sendKeys('admin');
    element(by.model('user.password')).sendKeys('huykai');

    element(by.id('signin')).click();

    expect(element(by.id('greeting')).isDisplayed()).
        toBe(true); //  This is wrong!
  });
});

describe('Protractor shmcc_app homepage', function() {
  it('should pass the signin', function() {
    expect(element(by.id('kpi_page')).isDisplayed()).toBe(true);
    element(by.id('kpi_page')).click();
  });
  
});
          

describe('Protrator shmcc_app kpi page', function() {
  it('should come to kpi page', function() {
    var all_combox = element.all(by.model('vm._text')); 
    //var element_combox = element.all(by.model('mydata_mme')); 
    expect(all_combox.count()).toBeGreaterThan(2);
    //expect(element_combox.count()).toEqual(1);
    
    var first_combox = all_combox.get(0);
    first_combox.clear();
    first_combox.sendKeys('60');
    first_combox.sendKeys('\n');
    
    var sec_combox = all_combox.get(1);
    sec_combox.clear();
    sec_combox.sendKeys('MME');
    sec_combox.sendKeys('\n');
    //sec_combox.click();
    //var text = sec_combox.getText();
    //console.log(text);
    //var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to contain the text 'foo'.
    //browser.wait(EC.textToBePresentInElement(first_combox, '60'), 5000);
    expect(element(by.binding('QueryDetailDesc')).getText()).toContain('Statistics Unit Type: MME');
    expect(element(by.binding('QueryDetailDesc')).getText()).toContain('Statistics Time Unit: 60');
  });  
    
  });
