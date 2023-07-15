# TS Compiler and Configuration
A brief project while learning Typescript

# Watch Mode:
To put TypeScript in watch mode for particular file, we have to press --watch or -w

        tsc <filename> --watch
                or
        tsc <filename> -w

To watch the whole project just remove file name

        tsc --watch
             or
        tsc -w

# Compiling:
To compile the entire project we must first be on the root directory and initialize tsc

        tsc --init

This will create a tsconfig.js with all TS configuration in it.
After this we can simply give tsc to compile the whole project now.

        tsc -w

# Including and Excluding files:
To exclude files from compiling we need to edit in the tsconfig.js. Simply put on exclude and give name or put wildcards in it.

        "exclude": [
                "node_modules",
                "analytics.ts",
                "**/*.dev.ts"
        ]
Note: node_modules is by default excluded.

Include is opposite of Exclude:

        "include": [
                "app.ts",
                "/TS_Begin/Basics"
        ]
Include will only compile file and folder in the include tag

# Lib
Is the library TS is using lib or library in tsconfi.json so that TS understand what you are doing.

        "lib": [
                "dom",
                "es6"   
        ]
By doing this TS recognizes and can use the libraries mentioned.

# SourceMap:
Another option in tsconfig.json to get TS code in source section in browser.
Just uncomment the "sourceMap": true option

# outDir:
Specify an output folder for all emitted files. Just set the outDir option to specified folder. Generally we put compiled js code in dist folder.

        "outDir": "./dist", 

# rootDir:
Specify root folder 'src' in this case. So this does not end up in the dist folder.

        "rootDir": "./src"

# noEmitOnError:
When noEmitOnError is True, if there is any error in the files your js won't get generated.

# noImplicitAny:
Enable error reporting for expressions and declarations with an implied 'any' type.

# strictNullChecks:
When type checking, take into account 'null' and 'undefined'.

# strictFunctionTypes
When assigning functions, check to ensure parameters and the return values are subtype-compatible.

# strictBindCallApply
        "strictBindCallApply": true,                      
Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. 