/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-ion-flutter-web",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.StaticSite("FlutterSite", {
      build: {
        command: "flutter build web",
        output: "build/web",
      },
    });
  },
});
