import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
	entry: 'src/index.js',
	dest: 'public/js/bundle.js',
	format: 'iife',
	plugins: [
		nodeResolve({ browser: true }),
		commonjs(),
		buble(),
		uglify()
	]
};