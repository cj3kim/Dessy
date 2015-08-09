# Dessy

## Utilize a simple DSL to generate all of your mocha tests.

Usage: node index.j input_file (optional: output_file)

#### Use nested whitespace to declare your DSL
    describe outputTests
      it should make life easier for you
      it should all you to write high level tests
      it should allow you to worry about the details later

      context when it's awesome
        it should return true
      context when you dance
        it should dance with you
        it should catch you when you fall

    describe doWeChant
      it should have good lyrics

      context when wizardly chant fails
        it should blow up

      describe when wizardly chant succeeds
        it should create a wave of serenity
        context when near monsters
          it should terrify them

#### With a simple command, have your DSL transformed into mocha tests.
    describe("outputTests", function () {
      it("should make life easier for you", function () {
      });
      it("should all you to write high level tests", function () {
      });
      it("should allow you to worry about the details later", function () {
      });
      context("when it's awesome", function () {

        it("should return true", function () {
        });
      });
      context("when you dance", function () {
        it("should dance with you", function () {
        });
        it("should catch you when you fall", function () {

        });
      });
    });
    describe("doWeChant", function () {
      it("should have good lyrics", function () {
      });

      context("when wizardly chant fails", function () {
        it("should blow up", function () {
        });

      });
      describe("when wizardly chant succeeds", function () {
        it("should create a wave of serenity", function () {
        });
        context("when near monsters", function () {
          it("should terrify them", function () {
          });
        });
      });
    });

ping me at cj3kim@gmail.com if you have problems. 
