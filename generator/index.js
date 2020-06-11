module.exports = api => {
    console.log(api);
    api.render('./template');

    api.extendPackage({
        scripts: {
            "cz:changelog": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"
        },
        config: {
            "commitizen": {
                "path": "node_modules/cz-customizable"
            }
        },
        commitlint: {
            "extends": [
                "@commitlint/config-conventional"
            ]
        },
        devDependencies: {
            "commitizen": "^4.1.2",
            "conventional-changelog": "^3.1.21",
            "cz-customizable": "^6.2.0",
            "@commitlint/cli": "^8.3.5",
            "@commitlint/config-conventional": "^8.3.4",
            "husky": "^4.2.5",
        },
        husky: {
            "hooks": {
                "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
            }
        }
    })
}