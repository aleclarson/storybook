lerna exec --scope ${@-@storybook/*} --parallel -- cross-env-shell node \$LERNA_ROOT_PATH/scripts/watch-tsc.js
