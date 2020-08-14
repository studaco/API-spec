const { exec } = require("child_process")
const { promises: { mkdir, access }, constants: { F_OK } } = require("fs")

const exists = url => access(url, F_OK).then(() => true).catch(() => false)

const processHandler = (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return
    }
    process.stdout.write(stdout, error => { if (error) console.log(error) })
    process.stderr.write(stderr, error => { if (error) console.log(error) })
}

commands = [
    "yarn schema src/requests.ts \"*\" -o out/requests.json --strictNullChechs --required",
    "yarn schema src/responses.ts \"*\" -o out/responses.json --strictNullChechs --required",
    "yarn schema src/errors.ts \"*\" -o out/errors.json --strictNullChechs --required",
    "yarn schema src/common.ts \"*\" -o out/common.json --strictNullChechs --required",
    "yarn examples src/examples.ts"
];


(async () => {
    if (!await exists("out")) await mkdir("out")
    for (command of commands) {
        exec(command, processHandler)
    }
})()