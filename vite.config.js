import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Sitemap from 'vite-plugin-sitemap';

const names = [
    'dragon-artifact',
    'legendary-equipment',
    'epic-equipment',
    'constitution',
    'mystery/grieving-the-death-of-a-friend',
    'mystery/reckless-courage',
    'resource/Mirage-Ship',
    'resource/secret-peak',
    'resource/magic-square',
    'resource/snow-field-area-resource',
    'resource/sabuk-area-resource',
    'resource/sabuk-area-chest',
    'resource/phantasia-area-resource',
    'resource/phantasia-area-chest',
    'resource/spiritual-area',
    'resource/valley',
    'resource/Mirage-Ship',
    'requests/Mirage-Ship-Deck',
    'requests/gorge-cliff-path',
    'requests/nine-dragon-ice-field',
    'requests/phantasia-desert',
    'requests/sabuk-castle',
    'requests/Mirage-Ship-Inner-Cabins',
    'requests/Mirage-Ship-Deck',
    'other-calculate/speed-boost',
    'other-calculate/lvl',
    'change-log',
];
const dynamicRoutes = names.map(name => `/${name}`);
export default defineConfig({
    plugins: [
        vue(),
        Sitemap({
            'hostname': 'https://mir4calc.com',
            dynamicRoutes,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: '0.0.0.0',
        port: '7414'
    },
    base: '',
    envDir: './env',
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.')[1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    }
                    if (extType === 'pdf') {
                        return `assets/pdf/[name][extname]`;
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
            }
        }
    },
});
