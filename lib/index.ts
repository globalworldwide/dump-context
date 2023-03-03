import * as core from '@actions/core'
import * as github from '@actions/github'
import * as prettier from 'prettier'

async function main() {
  core.info(prettier.format(core.getInput('inputs'), { parser: 'json' }))
  core.info(prettier.format(JSON.stringify(github.context), { parser: 'json' }))
  core.info(prettier.format(JSON.stringify(process.env), { parser: 'json' }))
}

main().catch((e) => core.setFailed(e.message))
