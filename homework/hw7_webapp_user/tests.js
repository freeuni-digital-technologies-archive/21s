setTimeout(() => {
	window.mocha.run();
})


const assert = chai.assert
const expect = chai.expect

const tester = new Tester();

describe(`სემინარი: ახალი პოსტის დადება 
    `, () => {
  describe(`პოსტები`, () => {
    it(`ელემენტები: დოკუმენტს უნდა ქონდეს პოსტების ელემენტი, რომლის id 
                არის ${testConfig.newPostContainerId}.

                ${testConfig.newPostContainerId} ელემენტში არსებობს textarea, რომლის id არის 
                ${testConfig.newPostTextId}.

                ${testConfig.newPostContainerId} ელემენტში არსებობს ღილაკი, რომლის
                id არის ${testConfig.newPostButtonId}

                დაპოსტილი პოსტებისთვის არსებობს div ელემენტი,
                რომლის id არის ${testConfig.postsContainerId}

                `, () => {
      assert.isNotNull(getById(testConfig.newPostTextId, 'textarea'));
      assert.isNotNull(getById(testConfig.newPostButtonId, 'button'));
      assert.isNotNull(getById(testConfig.postsContainerId, 'div'));
    });

    it(`ამ ღილაკზე დაჭერის შემდეგ პოსტის ველში შეყვანილი ტექსტი უნდა 
                დაემატოს პოსტების ფიდში (დაპოსტილი პოსტები). 
                თითოეული პოსტისთვის შექმენით ახალი ელემენტი, რომელსაც ექნება კლასი 
                ${testConfig.postContainerClass}. აქ შეგიძლიათ სხვადასხვა ელემენტები იყოს. მთავარია, 
                უშუალოდ პოსტის ტექსტის div ელემენტიც იყოს, და მას ქონდეს კლასი ${testConfig.postTextClass}`, () => {
      return tester.createAndAddPost().then((res) => {
        assert.equal(res.typed, res.result);
      });
    });
  });
});

describe(`დავალება: username`, () => {
  it(`1 ქულა. აპლიკაციაში არის input ელემენტი, 
		რომლის id არის ${testConfig.usernameInputId}.`, () => {
    assert.isNotNull(getById(testConfig.usernameInputId, 'input'));
  });

  it(`1 ქულა. input ელემენტში სანამ მომხმარებელი ტექსტს ჩაწერს, გამოაჩინე
		კითხვა "რა გქვია?" (როგორც პოსტზე ჩანს "what's up)"`, () =>
    assert.equal(getById(testConfig.usernameInputId).placeholder, "რა გქვია?"));
  it(`1 ქულა. ახალი პოსტის დადების შემდეგ, ${testConfig.postsContainerId} ელემენტში არის span ელემენტი, 
    	რომლის კლასი არის ${testConfig.postUserClass}. ელემენტში წერია იგივე, რაც 
    	${testConfig.usernameInputId}-ში`, () => {
    const userName = tester.setUser();
    return tester.checkUserInput().then((res) => assert.equal(userName, res));
  });

  it(`1 ქულა. username-ის შეცვლის შემთხვევაში 
    	შემდეგ პოსტზეც შეიცვლება სახელი`, () => {
    const userName = tester.setUser();
    return tester.checkUserInput().then((res) => assert.equal(userName, res));
  });
});