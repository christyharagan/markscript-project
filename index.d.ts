///<reference path="./node_modules/marklogic-typescript-definitions/ts/index.d.ts" />
///<reference path="./node_modules/markscript-server/lib/index.d.ts" />
///<reference path="./node_modules/markscript-uservices-server/lib/index.d.ts" />
///<reference path="./node_modules/typescript-schema/lib/index.d.ts" />
///<reference path="./node_modules/uservices/lib/index.d.ts" />

export interface RunOptions {
  database: {
    name: string
    host: string
    port: number
    user: string
    password: string
  }
  middle: {
    host: string
    port: number
    fileServerPath?: string
  }
}
