import { existsSync, readdirSync, rmdirSync, unlinkSync, lstatSync } from 'fs'
import { resolve } from 'path'

export function emptyDir(dir: string) {
	if (!existsSync(dir)) return

	for (const file of readdirSync(dir)) {
		const abs = resolve(dir, file)
		// baseline is Node 12 so can't use rmSync :(
		if (lstatSync(abs).isDirectory()) {
			emptyDir(abs)
			rmdirSync(abs)
		} else {
			unlinkSync(abs)
		}
	}
}
