/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         *
         * tested this by verifying that each feed has a url
         */
        it("loop through each feed and ensure url defined", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         *
         * tested by verifying that each feed has a name value defined
         */
        it("loop through each feed and ensure name defined", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });

    });


    describe('menu', function() {
        /* Atest that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         *
         * verify that on initialization, the body has a menu-hidden class
         * meaning the menu element is hidden on initialization
         */
        it("menu element hidden by default", function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         *
         * execute a click on the element with the menu icon class, then verify
         * that the body no longer has the menu-hidden class on it (hence, it is no longer hidden)
         */
        it("menu changes visibility when the icon is clicked", function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         *
         * intialize this by loading the first feed, which is done on startup.
         * and if that is the case, verify that that an entry has been loaded
         * by looking for at least one element with an entry class in it
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has been loaded', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe("New Feed Selection", function() {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         * initialize by getting the initial feed then loading a second entry
         */
        var initialFeed;
        beforeEach(function(done) {
            loadFeed(1);
            setTimeout(function() {
                initialFeed = $('.feed').find('.entry-link').attr('href');
                done();
            }, 2000);
        });

        it('has been changed', function(done) {
            loadFeed(0);
            setTimeout(function() {
                var secondFeed = $('.feed').find('.entry-link').attr('href');
                expect(secondFeed).not.toEqual(initialFeed);
                done();
            }, 2000);
        });

    });
}());