import { defineAddonSettings, SettingType } from '@pulsesync/addon-sdk'

export const settings = defineAddonSettings([
    {
        title: 'Управление',
        items: {
            controlsEnabled: {
                type: SettingType.BOOLEAN,
                name: 'Новый вид управления плеером',
                description: 'Включить измененный вид панели управления плеером',
                default: true,
            },
            controlsContentBackgroundStyle: {
                type: SettingType.SELECT,
                name: 'Стиль фона элементов управления плеером',
                default: 2,
                options: [
                    { value: 1, label: 'Отсутствует' },
                    { value: 2, label: 'Темный с размытием' },
                    { value: 3, label: 'Инвертированный' },
                ],
            },
        },
    },
    {
        title: 'Фон',
        items: {
            backgroundCover: {
                type: SettingType.BOOLEAN,
                name: 'Обложка на фон',
                description: 'Заменить фон плеера на обложку трека',
                default: true,
            },
            backgroundImage: {
                type: SettingType.STRING,
                name: 'Своё фоновое изображение',
                description: 'Установить своё изображение для полноэкранного плеера',
                default: '',
            },
            backgroundBrightness: {
                type: SettingType.NUMBER,
                name: 'Яркость (%)',
                description: 'Яркость фона полноэкранного плеера',
                min: 0,
                max: 100,
                step: 1,
                default: 100,
            },
            backgroundBrightnessCorrection: {
                type: SettingType.BOOLEAN,
                name: 'Нормализация яркости',
                description: 'Автоматическое затемнение яркости фона плеера',
                default: true,
            },
            backgroundBlur: {
                type: SettingType.NUMBER,
                name: 'Блюр (px)',
                description: 'Блюр фона полноэкранного плеера',
                min: 0,
                max: 30,
                step: 1,
                default: 8,
            },
        },
    },
    {
        title: 'Дополнительное',
        items: {
            debugMode: {
                type: SettingType.BOOLEAN,
                name: 'Debug режим',
                description: 'Включает debug логирование в консоли',
                default: false,
            },
        },
    },
])
