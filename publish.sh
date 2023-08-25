set -ex
npm version
npx rollup -c
cp index.d.ts dist/es/
cp index.d.ts dist/lib/
cp lib/all.d.ts dist/es/
cp lib/all.d.ts dist/lib/
cp lib/common.d.ts dist/es/
cp lib/common.d.ts dist/lib/
cp lib/core.d.ts dist/es/
cp lib/core.d.ts dist/lib/
npm publish --registry=https://registry.npmjs.org/ 
