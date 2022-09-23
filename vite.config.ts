import { defineConfig, loadEnv } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
// import { ViteEjsPlugin } from 'vite-plugin-ejs';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginEslint from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import envCompatible from 'vite-plugin-env-compatible';
import swcReact from 'vite-plugin-swc-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    console.log('mode => ', mode);
    // This changes the out put dir from dist to build
    // comment this out if that isn't relevant for your project
    const env = loadEnv(mode, process.cwd());

    // expose .env as process.env instead of import.meta since jest does not import meta yet
    const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
        return {
            ...prev,
            [`process.env.${key}`]: `"${val}"`,
        };
    }, {});

    console.log('env => ', envWithProcessPrefix);

    return {
        build: {
            outDir: 'build',
            minify: false,
        },
        plugins: [
            // react(),
            reactRefresh(),
            svgrPlugin({
                svgrOptions: {
                    icon: true,
                    // ...svgr options (https://react-svgr.com/docs/options/)
                },
            }),
            // ViteEjsPlugin({
            //     // 여기에는 사용하고자 하는 변수를 선언해주면 됩니다.
            //     nodeEnv: import.meta.env?.VITE_NODE_ENV || null,
            //     apiUrl: import.meta.env?.VITE_API_URL || null,
            //     publicUrl: import.meta.env?.VITE_PUBLIC_URL || null,
            // }),
            vitePluginEslint(),
            viteTsconfigPaths(),
            envCompatible(),
            swcReact({
                swcOptions: {
                    jsc: {
                        transform: {
                            react: {
                                runtime: 'automatic',
                            },
                        },
                    },
                },
            }),
        ],
        define: envWithProcessPrefix,
        // resolve: {
        //     alias: {
        //         '@/': resolve(__dirname, './'),
        //         '@comp': resolve(__dirname, './src/components'),
        //         // '@container': resolve(__dirname, './src/containers'),
        //     },
        // },
    };
});
