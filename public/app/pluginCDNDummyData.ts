import { PluginType, PluginState, PluginSignatureStatus } from '@grafana/data';

// import { cdnHost } from './features/plugins/pluginCDN';

// const baseUrl = 'plugin-cdn';

const dummyPanel = {
  info: {
    author: {
      name: 'Grafana Labs',
      url: 'https://grafana.com',
    },
    links: [
      {
        name: 'Project site',
        url: 'https://github.com/grafana/clock-panel',
      },
      {
        name: 'MIT License',
        url: 'https://github.com/grafana/clock-panel/blob/master/LICENSE',
      },
    ],
    build: {
      time: 1657138674187,
      repo: 'https://github.com/grafana/clock-panel',
      branch: 'master',
      hash: 'dfcdaf668efc3a5a5845b245313832b2eaa8df2f',
    },
    screenshots: [
      {
        name: 'Showcase',
        path: `/img/screenshot-showcase.png`,
      },
      {
        name: 'Options',
        path: `/img/screenshot-clock-options.png`,
      },
    ],
    updated: '2022-07-06',
  },
  hideFromList: false,
  sort: 100,
  skipDataQuery: false,
  state: PluginState.stable,
  signature: PluginSignatureStatus.valid,
  type: PluginType.panel,
};

const dummyData = [
  {
    id: 'grafana-worldmap-panel',
    name: 'Worldmap Panel',
    info: {
      description:
        'World Map panel for Grafana. Displays time series data or geohash data from Elasticsearch overlaid on a world map.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/grafana-worldmap-panel/0.3.3/public/plugins/grafana-worldmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/grafana-worldmap-panel/0.3.3/public/plugins/grafana-worldmap-panel/img/logo.svg',
      },
      version: '0.3.3',
    },
    baseUrl: 'plugin-cdn/grafana-worldmap-panel/0.3.3/public/plugins/grafana-worldmap-panel',
    module: 'plugin-cdn/grafana-worldmap-panel/0.3.3/public/plugins/grafana-worldmap-panel/module',
  },
  {
    id: 'grafana-clock-panel',
    name: 'Clock',
    info: {
      description: 'Clock panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/grafana-clock-panel/2.1.1/public/plugins/grafana-clock-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/grafana-clock-panel/2.1.1/public/plugins/grafana-clock-panel/img/logo.svg',
      },
      version: '2.1.1',
    },
    baseUrl: 'plugin-cdn/grafana-clock-panel/2.1.1/public/plugins/grafana-clock-panel',
    module: 'plugin-cdn/grafana-clock-panel/2.1.1/public/plugins/grafana-clock-panel/module',
  },
  {
    id: 'satellogic-3d-globe-panel',
    name: '3D Globe Panel',
    info: {
      description: 'A Cesium based 3D Globe panel plugin.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/satellogic-3d-globe-panel/0.1.1/public/plugins/satellogic-3d-globe-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/satellogic-3d-globe-panel/0.1.1/public/plugins/satellogic-3d-globe-panel/img/logo.svg',
      },
      version: '0.1.1',
    },
    baseUrl: 'plugin-cdn/satellogic-3d-globe-panel/0.1.1/public/plugins/satellogic-3d-globe-panel',
    module: 'plugin-cdn/satellogic-3d-globe-panel/0.1.1/public/plugins/satellogic-3d-globe-panel/module',
  },
  {
    id: 'aceiot-svg-panel',
    name: 'ACE.SVG',
    info: {
      description: 'SVG Visualization Panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/aceiot-svg-panel/0.0.11/public/plugins/aceiot-svg-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/aceiot-svg-panel/0.0.11/public/plugins/aceiot-svg-panel/img/logo.svg',
      },
      version: '0.0.11',
    },
    baseUrl: 'plugin-cdn/aceiot-svg-panel/0.0.11/public/plugins/aceiot-svg-panel',
    module: 'plugin-cdn/aceiot-svg-panel/0.0.11/public/plugins/aceiot-svg-panel/module',
  },
  {
    id: 'ryantxu-ajax-panel',
    name: 'AJAX',
    info: {
      description: 'AJAX panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/ryantxu-ajax-panel/0.1.0/public/plugins/ryantxu-ajax-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/ryantxu-ajax-panel/0.1.0/public/plugins/ryantxu-ajax-panel/img/logo.svg',
      },
      version: '0.1.0',
    },
    baseUrl: 'plugin-cdn/ryantxu-ajax-panel/0.1.0/public/plugins/ryantxu-ajax-panel',
    module: 'plugin-cdn/ryantxu-ajax-panel/0.1.0/public/plugins/ryantxu-ajax-panel/module',
  },
  {
    id: 'macropower-analytics-panel',
    name: 'Analytics Panel',
    info: {
      description: "It's like Google Analytics, but for Grafana dashboards!",
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/macropower-analytics-panel/2.1.0/public/plugins/macropower-analytics-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/macropower-analytics-panel/2.1.0/public/plugins/macropower-analytics-panel/img/logo.svg',
      },
      version: '2.1.0',
    },
    baseUrl: 'plugin-cdn/macropower-analytics-panel/2.1.0/public/plugins/macropower-analytics-panel',
    module: 'plugin-cdn/macropower-analytics-panel/2.1.0/public/plugins/macropower-analytics-panel/module',
  },
  {
    id: 'ryantxu-annolist-panel',
    name: 'Annotation List',
    info: {
      description: 'List of builtin Annotations',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/ryantxu-annolist-panel/0.0.2/public/plugins/ryantxu-annolist-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/ryantxu-annolist-panel/0.0.2/public/plugins/ryantxu-annolist-panel/img/logo.svg',
      },
      version: '0.0.2',
    },
    baseUrl: 'plugin-cdn/ryantxu-annolist-panel/0.0.2/public/plugins/ryantxu-annolist-panel',
    module: 'plugin-cdn/ryantxu-annolist-panel/0.0.2/public/plugins/ryantxu-annolist-panel/module',
  },
  {
    id: 'novalabs-annotations-panel',
    name: 'Annotation Panel',
    info: {
      description: 'Annotations panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/novalabs-annotations-panel/0.0.2/public/plugins/novalabs-annotations-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/novalabs-annotations-panel/0.0.2/public/plugins/novalabs-annotations-panel/img/logo.svg',
      },
      version: '0.0.2',
    },
    baseUrl: 'plugin-cdn/novalabs-annotations-panel/0.0.2/public/plugins/novalabs-annotations-panel',
    module: 'plugin-cdn/novalabs-annotations-panel/0.0.2/public/plugins/novalabs-annotations-panel/module',
  },
  {
    id: 'michaeldmoore-annunciator-panel',
    name: 'Annunciator',
    info: {
      description:
        'Enhanced version of built-in SingleStat panel, with specialized display of thresholds and value-sensative presentation',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/michaeldmoore-annunciator-panel/1.1.0/public/plugins/michaeldmoore-annunciator-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/michaeldmoore-annunciator-panel/1.1.0/public/plugins/michaeldmoore-annunciator-panel/img/logo.svg',
      },
      version: '1.1.0',
    },
    baseUrl: 'plugin-cdn/michaeldmoore-annunciator-panel/1.1.0/public/plugins/michaeldmoore-annunciator-panel',
    module: 'plugin-cdn/michaeldmoore-annunciator-panel/1.1.0/public/plugins/michaeldmoore-annunciator-panel/module',
  },
  {
    id: 'volkovlabs-echarts-panel',
    name: 'Apache ECharts',
    info: {
      description: 'Apache ECharts panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/volkovlabs-echarts-panel/3.7.0/public/plugins/volkovlabs-echarts-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/volkovlabs-echarts-panel/3.7.0/public/plugins/volkovlabs-echarts-panel/img/logo.svg',
      },
      version: '3.7.0',
    },
    baseUrl: 'plugin-cdn/volkovlabs-echarts-panel/3.7.0/public/plugins/volkovlabs-echarts-panel',
    module: 'plugin-cdn/volkovlabs-echarts-panel/3.7.0/public/plugins/volkovlabs-echarts-panel/module',
  },
  {
    id: 'volkovlabs-image-panel',
    name: 'Base64 Image/Video/Audio/PDF',
    info: {
      description: 'Base64 Image/Video/Audio/PDF panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/volkovlabs-image-panel/3.3.0/public/plugins/volkovlabs-image-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/volkovlabs-image-panel/3.3.0/public/plugins/volkovlabs-image-panel/img/logo.svg',
      },
      version: '3.3.0',
    },
    baseUrl: 'plugin-cdn/volkovlabs-image-panel/3.3.0/public/plugins/volkovlabs-image-panel',
    module: 'plugin-cdn/volkovlabs-image-panel/3.3.0/public/plugins/volkovlabs-image-panel/module',
  },
  {
    id: 'farski-blendstat-panel',
    name: 'Blendstat',
    info: {
      description: 'Blendstat Panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/farski-blendstat-panel/1.0.3/public/plugins/farski-blendstat-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/farski-blendstat-panel/1.0.3/public/plugins/farski-blendstat-panel/img/logo.svg',
      },
      version: '1.0.3',
    },
    baseUrl: 'plugin-cdn/farski-blendstat-panel/1.0.3/public/plugins/farski-blendstat-panel',
    module: 'plugin-cdn/farski-blendstat-panel/1.0.3/public/plugins/farski-blendstat-panel/module',
  },
  {
    id: 'yesoreyeram-boomtable-panel',
    name: 'Boom Table',
    info: {
      description: 'Boom table panel for Graphite, InfluxDB, Prometheus',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/yesoreyeram-boomtable-panel/1.4.1/public/plugins/yesoreyeram-boomtable-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/yesoreyeram-boomtable-panel/1.4.1/public/plugins/yesoreyeram-boomtable-panel/img/logo.svg',
      },
      version: '1.4.1',
    },
    baseUrl: 'plugin-cdn/yesoreyeram-boomtable-panel/1.4.1/public/plugins/yesoreyeram-boomtable-panel',
    module: 'plugin-cdn/yesoreyeram-boomtable-panel/1.4.1/public/plugins/yesoreyeram-boomtable-panel/module',
  },
  {
    id: 'yesoreyeram-boomtheme-panel',
    name: 'Boom Theme',
    info: {
      description: 'Themes for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/yesoreyeram-boomtheme-panel/0.2.1/public/plugins/yesoreyeram-boomtheme-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/yesoreyeram-boomtheme-panel/0.2.1/public/plugins/yesoreyeram-boomtheme-panel/img/logo.svg',
      },
      version: '0.2.1',
    },
    baseUrl: 'plugin-cdn/yesoreyeram-boomtheme-panel/0.2.1/public/plugins/yesoreyeram-boomtheme-panel',
    module: 'plugin-cdn/yesoreyeram-boomtheme-panel/0.2.1/public/plugins/yesoreyeram-boomtheme-panel/module',
  },
  {
    id: 'timomyl-breadcrumb-panel',
    name: 'Breadcrumb',
    info: {
      description: 'Breadcrumb Panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/timomyl-breadcrumb-panel/1.2.0/public/plugins/timomyl-breadcrumb-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/timomyl-breadcrumb-panel/1.2.0/public/plugins/timomyl-breadcrumb-panel/img/logo.svg',
      },
      version: '1.2.0',
    },
    baseUrl: 'plugin-cdn/timomyl-breadcrumb-panel/1.2.0/public/plugins/timomyl-breadcrumb-panel',
    module: 'plugin-cdn/timomyl-breadcrumb-panel/1.2.0/public/plugins/timomyl-breadcrumb-panel/module',
  },
  {
    id: 'digrich-bubblechart-panel',
    name: 'Bubble Chart',
    info: {
      description: 'Bubblechart panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/digrich-bubblechart-panel/1.2.1/public/plugins/digrich-bubblechart-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/digrich-bubblechart-panel/1.2.1/public/plugins/digrich-bubblechart-panel/img/logo.svg',
      },
      version: '1.2.1',
    },
    baseUrl: 'plugin-cdn/digrich-bubblechart-panel/1.2.1/public/plugins/digrich-bubblechart-panel',
    module: 'plugin-cdn/digrich-bubblechart-panel/1.2.1/public/plugins/digrich-bubblechart-panel/module',
  },
  {
    id: 'netsage-bumpchart-panel',
    name: 'Bump Chart Panel',
    info: {
      description: 'Bump Chart Panel Plugin',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/netsage-bumpchart-panel/1.0.2/public/plugins/netsage-bumpchart-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/netsage-bumpchart-panel/1.0.2/public/plugins/netsage-bumpchart-panel/img/logo.svg',
      },
      version: '1.0.2',
    },
    baseUrl: 'plugin-cdn/netsage-bumpchart-panel/1.0.2/public/plugins/netsage-bumpchart-panel',
    module: 'plugin-cdn/netsage-bumpchart-panel/1.0.2/public/plugins/netsage-bumpchart-panel/module',
  },
  {
    id: 'speakyourcode-button-panel',
    name: 'Button',
    info: {
      description: 'Button Control Panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/speakyourcode-button-panel/0.2.2/public/plugins/speakyourcode-button-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/speakyourcode-button-panel/0.2.2/public/plugins/speakyourcode-button-panel/img/logo.svg',
      },
      version: '0.2.2',
    },
    baseUrl: 'plugin-cdn/speakyourcode-button-panel/0.2.2/public/plugins/speakyourcode-button-panel',
    module: 'plugin-cdn/speakyourcode-button-panel/0.2.2/public/plugins/speakyourcode-button-panel/module',
  },
  {
    id: 'cloudspout-button-panel',
    name: 'Button Panel',
    info: {
      description: 'Panel for a single button',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/cloudspout-button-panel/7.0.23/public/plugins/cloudspout-button-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/cloudspout-button-panel/7.0.23/public/plugins/cloudspout-button-panel/img/logo.svg',
      },
      version: '7.0.23',
    },
    baseUrl: 'plugin-cdn/cloudspout-button-panel/7.0.23/public/plugins/cloudspout-button-panel',
    module: 'plugin-cdn/cloudspout-button-panel/7.0.23/public/plugins/cloudspout-button-panel/module',
  },
  {
    id: 'neocat-cal-heatmap-panel',
    name: 'Cal-HeatMap',
    info: {
      description: 'Cal-HeatMap panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/neocat-cal-heatmap-panel/0.0.4/public/plugins/neocat-cal-heatmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/neocat-cal-heatmap-panel/0.0.4/public/plugins/neocat-cal-heatmap-panel/img/logo.svg',
      },
      version: '0.0.4',
    },
    baseUrl: 'plugin-cdn/neocat-cal-heatmap-panel/0.0.4/public/plugins/neocat-cal-heatmap-panel',
    module: 'plugin-cdn/neocat-cal-heatmap-panel/0.0.4/public/plugins/neocat-cal-heatmap-panel/module',
  },
  {
    id: 'marcusolsson-calendar-panel',
    name: 'Calendar',
    info: {
      description: 'Display events and set time range',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-calendar-panel/1.0.0/public/plugins/marcusolsson-calendar-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-calendar-panel/1.0.0/public/plugins/marcusolsson-calendar-panel/img/logo.svg',
      },
      version: '1.0.0',
    },
    baseUrl: 'plugin-cdn/marcusolsson-calendar-panel/1.0.0/public/plugins/marcusolsson-calendar-panel',
    module: 'plugin-cdn/marcusolsson-calendar-panel/1.0.0/public/plugins/marcusolsson-calendar-panel/module',
  },
  {
    id: 'petrslavotinek-carpetplot-panel',
    name: 'Carpet plot',
    info: {
      description: 'Carpet plot panel plugin for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/petrslavotinek-carpetplot-panel/0.1.2/public/plugins/petrslavotinek-carpetplot-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/petrslavotinek-carpetplot-panel/0.1.2/public/plugins/petrslavotinek-carpetplot-panel/img/logo.svg',
      },
      version: '0.1.2',
    },
    baseUrl: 'plugin-cdn/petrslavotinek-carpetplot-panel/0.1.2/public/plugins/petrslavotinek-carpetplot-panel',
    module: 'plugin-cdn/petrslavotinek-carpetplot-panel/0.1.2/public/plugins/petrslavotinek-carpetplot-panel/module',
  },
  {
    id: 'sebastiangunreben-cdf-panel',
    name: 'CDF - Cumulative Distribution Function',
    info: {
      description: 'Panel for CDF visualizations',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/sebastiangunreben-cdf-panel/0.2.4/public/plugins/sebastiangunreben-cdf-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/sebastiangunreben-cdf-panel/0.2.4/public/plugins/sebastiangunreben-cdf-panel/img/logo.svg',
      },
      version: '0.2.4',
    },
    baseUrl: 'plugin-cdn/sebastiangunreben-cdf-panel/0.2.4/public/plugins/sebastiangunreben-cdf-panel',
    module: 'plugin-cdn/sebastiangunreben-cdf-panel/0.2.4/public/plugins/sebastiangunreben-cdf-panel/module',
  },
  {
    id: 'corpglory-chartwerk-panel',
    name: 'Chartwerk',
    info: {
      description: 'Chartwerk panel with extended chart customization',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/corpglory-chartwerk-panel/0.5.0/public/plugins/corpglory-chartwerk-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/corpglory-chartwerk-panel/0.5.0/public/plugins/corpglory-chartwerk-panel/img/logo.svg',
      },
      version: '0.5.0',
    },
    baseUrl: 'plugin-cdn/corpglory-chartwerk-panel/0.5.0/public/plugins/corpglory-chartwerk-panel',
    module: 'plugin-cdn/corpglory-chartwerk-panel/0.5.0/public/plugins/corpglory-chartwerk-panel/module',
  },
  {
    id: 'snuids-svg-panel',
    name: 'Colored SVG Panel',
    info: {
      description: 'A panel that displays values as colored svg images',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/snuids-svg-panel/1.0.0/public/plugins/snuids-svg-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/snuids-svg-panel/1.0.0/public/plugins/snuids-svg-panel/img/logo.svg',
      },
      version: '1.0.0',
    },
    baseUrl: 'plugin-cdn/snuids-svg-panel/1.0.0/public/plugins/snuids-svg-panel',
    module: 'plugin-cdn/snuids-svg-panel/1.0.0/public/plugins/snuids-svg-panel/module',
  },
  {
    id: 'zestairlove-compacthostmap-panel',
    name: 'Compact Hostmap Panel',
    info: {
      description: 'Grafana Compact Hostmap Panel Plugin',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/zestairlove-compacthostmap-panel/0.9.0/public/plugins/zestairlove-compacthostmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/zestairlove-compacthostmap-panel/0.9.0/public/plugins/zestairlove-compacthostmap-panel/img/logo.svg',
      },
      version: '0.9.0',
    },
    baseUrl: 'plugin-cdn/zestairlove-compacthostmap-panel/0.9.0/public/plugins/zestairlove-compacthostmap-panel',
    module: 'plugin-cdn/zestairlove-compacthostmap-panel/0.9.0/public/plugins/zestairlove-compacthostmap-panel/module',
  },
  {
    id: 'integrationmatters-comparison-panel',
    name: 'Comparison Panel',
    info: {
      description: '',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/integrationmatters-comparison-panel/1.1.0/public/plugins/integrationmatters-comparison-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/integrationmatters-comparison-panel/1.1.0/public/plugins/integrationmatters-comparison-panel/img/logo.svg',
      },
      version: '1.1.0',
    },
    baseUrl: 'plugin-cdn/integrationmatters-comparison-panel/1.1.0/public/plugins/integrationmatters-comparison-panel',
    module:
      'plugin-cdn/integrationmatters-comparison-panel/1.1.0/public/plugins/integrationmatters-comparison-panel/module',
  },
  {
    id: 'briangann-gauge-panel',
    name: 'D3 Gauge',
    info: {
      description: 'D3-based Gauge panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/briangann-gauge-panel/0.0.9/public/plugins/briangann-gauge-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/briangann-gauge-panel/0.0.9/public/plugins/briangann-gauge-panel/img/logo.svg',
      },
      version: '0.0.9',
    },
    baseUrl: 'plugin-cdn/briangann-gauge-panel/0.0.9/public/plugins/briangann-gauge-panel',
    module: 'plugin-cdn/briangann-gauge-panel/0.0.9/public/plugins/briangann-gauge-panel/module',
  },
  {
    id: 'volkovlabs-form-panel',
    name: 'Data Manipulation',
    info: {
      description: 'Data Manipulation Panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/volkovlabs-form-panel/2.7.0/public/plugins/volkovlabs-form-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/volkovlabs-form-panel/2.7.0/public/plugins/volkovlabs-form-panel/img/logo.svg',
      },
      version: '2.7.0',
    },
    baseUrl: 'plugin-cdn/volkovlabs-form-panel/2.7.0/public/plugins/volkovlabs-form-panel',
    module: 'plugin-cdn/volkovlabs-form-panel/2.7.0/public/plugins/volkovlabs-form-panel/module',
  },
  {
    id: 'briangann-datatable-panel',
    name: 'Datatable Panel',
    info: {
      description: 'Datatable panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/briangann-datatable-panel/1.0.3/public/plugins/briangann-datatable-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/briangann-datatable-panel/1.0.3/public/plugins/briangann-datatable-panel/img/logo.svg',
      },
      version: '1.0.3',
    },
    baseUrl: 'plugin-cdn/briangann-datatable-panel/1.0.3/public/plugins/briangann-datatable-panel',
    module: 'plugin-cdn/briangann-datatable-panel/1.0.3/public/plugins/briangann-datatable-panel/module',
  },
  {
    id: 'jdbranham-diagram-panel',
    name: 'Diagram',
    info: {
      description: 'Display diagrams and charts with colored metric indicators',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/jdbranham-diagram-panel/1.7.3/public/plugins/jdbranham-diagram-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/jdbranham-diagram-panel/1.7.3/public/plugins/jdbranham-diagram-panel/img/logo.svg',
      },
      version: '1.7.3',
    },
    baseUrl: 'plugin-cdn/jdbranham-diagram-panel/1.7.3/public/plugins/jdbranham-diagram-panel',
    module: 'plugin-cdn/jdbranham-diagram-panel/1.7.3/public/plugins/jdbranham-diagram-panel/module',
  },
  {
    id: 'natel-discrete-panel',
    name: 'Discrete',
    info: {
      description: 'Discrete Events grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/natel-discrete-panel/0.1.1/public/plugins/natel-discrete-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/natel-discrete-panel/0.1.1/public/plugins/natel-discrete-panel/img/logo.svg',
      },
      version: '0.1.1',
    },
    baseUrl: 'plugin-cdn/natel-discrete-panel/0.1.1/public/plugins/natel-discrete-panel',
    module: 'plugin-cdn/natel-discrete-panel/0.1.1/public/plugins/natel-discrete-panel/module',
  },
  {
    id: 'dalvany-image-panel',
    name: 'Dynamic image panel',
    info: {
      description: 'Concatenate a metric to an URL in order to display an image',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/dalvany-image-panel/2.7.0/public/plugins/dalvany-image-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/dalvany-image-panel/2.7.0/public/plugins/dalvany-image-panel/img/logo.svg',
      },
      version: '2.7.0',
    },
    baseUrl: 'plugin-cdn/dalvany-image-panel/2.7.0/public/plugins/dalvany-image-panel',
    module: 'plugin-cdn/dalvany-image-panel/2.7.0/public/plugins/dalvany-image-panel/module',
  },
  {
    id: 'marcusolsson-dynamictext-panel',
    name: 'Dynamic Text',
    info: {
      description: 'Data-driven text with Markdown and Handlebars support',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-dynamictext-panel/2.1.0/public/plugins/marcusolsson-dynamictext-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-dynamictext-panel/2.1.0/public/plugins/marcusolsson-dynamictext-panel/img/logo.svg',
      },
      version: '2.1.0',
    },
    baseUrl: 'plugin-cdn/marcusolsson-dynamictext-panel/2.1.0/public/plugins/marcusolsson-dynamictext-panel',
    module: 'plugin-cdn/marcusolsson-dynamictext-panel/2.1.0/public/plugins/marcusolsson-dynamictext-panel/module',
  },
  {
    id: 'bilibala-echarts-panel',
    name: 'Echarts',
    info: {
      description: 'Echarts panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/bilibala-echarts-panel/2.2.4/public/plugins/bilibala-echarts-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/bilibala-echarts-panel/2.2.4/public/plugins/bilibala-echarts-panel/img/logo.svg',
      },
      version: '2.2.4',
    },
    baseUrl: 'plugin-cdn/bilibala-echarts-panel/2.2.4/public/plugins/bilibala-echarts-panel',
    module: 'plugin-cdn/bilibala-echarts-panel/2.2.4/public/plugins/bilibala-echarts-panel/module',
  },
  {
    id: 'larona-epict-panel',
    name: 'ePict Panel',
    info: {
      description: 'Enter the URL of the image you want, and add some metrics on it.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/larona-epict-panel/2.0.5/public/plugins/larona-epict-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/larona-epict-panel/2.0.5/public/plugins/larona-epict-panel/img/logo.svg',
      },
      version: '2.0.5',
    },
    baseUrl: 'plugin-cdn/larona-epict-panel/2.0.5/public/plugins/larona-epict-panel',
    module: 'plugin-cdn/larona-epict-panel/2.0.5/public/plugins/larona-epict-panel/module',
  },
  {
    id: 'esnet-chord-panel',
    name: 'ESnet Chord',
    info: {
      description: 'ESnet Chord Panel Plugin for Grafana 8.3 and newer',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/esnet-chord-panel/1.0.3/public/plugins/esnet-chord-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/esnet-chord-panel/1.0.3/public/plugins/esnet-chord-panel/img/logo.svg',
      },
      version: '1.0.3',
    },
    baseUrl: 'plugin-cdn/esnet-chord-panel/1.0.3/public/plugins/esnet-chord-panel',
    module: 'plugin-cdn/esnet-chord-panel/1.0.3/public/plugins/esnet-chord-panel/module',
  },
  {
    id: 'esnet-matrix-panel',
    name: 'ESNET Matrix Panel',
    info: {
      description: 'Matrix Panel Plugin that allows comparison of two non-timeseries categories',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/esnet-matrix-panel/1.0.6/public/plugins/esnet-matrix-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/esnet-matrix-panel/1.0.6/public/plugins/esnet-matrix-panel/img/logo.svg',
      },
      version: '1.0.6',
    },
    baseUrl: 'plugin-cdn/esnet-matrix-panel/1.0.6/public/plugins/esnet-matrix-panel',
    module: 'plugin-cdn/esnet-matrix-panel/1.0.6/public/plugins/esnet-matrix-panel/module',
  },
  {
    id: 'agenty-flowcharting-panel',
    name: 'FlowCharting',
    info: {
      description:
        'Flowcharting is a Grafana plugin. Use it to display complexe diagrams using the online graphing library draw.io like a vsio',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/agenty-flowcharting-panel/0.9.1/public/plugins/agenty-flowcharting-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/agenty-flowcharting-panel/0.9.1/public/plugins/agenty-flowcharting-panel/img/logo.svg',
      },
      version: '0.9.1',
    },
    baseUrl: 'plugin-cdn/agenty-flowcharting-panel/0.9.1/public/plugins/agenty-flowcharting-panel',
    module: 'plugin-cdn/agenty-flowcharting-panel/0.9.1/public/plugins/agenty-flowcharting-panel/module',
  },
  {
    id: 'foursquare-studio-panel',
    name: 'Foursquare Studio Panel',
    info: {
      description: '',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/foursquare-studio-panel/1.0.1/public/plugins/foursquare-studio-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/foursquare-studio-panel/1.0.1/public/plugins/foursquare-studio-panel/img/logo.svg',
      },
      version: '1.0.1',
    },
    baseUrl: 'plugin-cdn/foursquare-studio-panel/1.0.1/public/plugins/foursquare-studio-panel',
    module: 'plugin-cdn/foursquare-studio-panel/1.0.1/public/plugins/foursquare-studio-panel/module',
  },
  {
    id: 'marcusolsson-gantt-panel',
    name: 'Gantt',
    info: {
      description: 'Tasks and processes over time',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-gantt-panel/0.8.1/public/plugins/marcusolsson-gantt-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-gantt-panel/0.8.1/public/plugins/marcusolsson-gantt-panel/img/logo.svg',
      },
      version: '0.8.1',
    },
    baseUrl: 'plugin-cdn/marcusolsson-gantt-panel/0.8.1/public/plugins/marcusolsson-gantt-panel',
    module: 'plugin-cdn/marcusolsson-gantt-panel/0.8.1/public/plugins/marcusolsson-gantt-panel/module',
  },
  {
    id: 'citilogics-geoloop-panel',
    name: 'GeoLoop',
    info: {
      description: 'Looping animated map for Grafana.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/citilogics-geoloop-panel/1.1.2/public/plugins/citilogics-geoloop-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/citilogics-geoloop-panel/1.1.2/public/plugins/citilogics-geoloop-panel/img/logo.svg',
      },
      version: '1.1.2',
    },
    baseUrl: 'plugin-cdn/citilogics-geoloop-panel/1.1.2/public/plugins/citilogics-geoloop-panel',
    module: 'plugin-cdn/citilogics-geoloop-panel/1.1.2/public/plugins/citilogics-geoloop-panel/module',
  },
  {
    id: 'grafana-guidedtour-panel',
    name: 'Guided Tour',
    info: {
      description: 'Guided tour for Grafana dashboards',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/grafana-guidedtour-panel/0.2.0/public/plugins/grafana-guidedtour-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/grafana-guidedtour-panel/0.2.0/public/plugins/grafana-guidedtour-panel/img/logo.svg',
      },
      version: '0.2.0',
    },
    baseUrl: 'plugin-cdn/grafana-guidedtour-panel/0.2.0/public/plugins/grafana-guidedtour-panel',
    module: 'plugin-cdn/grafana-guidedtour-panel/0.2.0/public/plugins/grafana-guidedtour-panel/module',
  },
  {
    id: 'savantly-heatmap-panel',
    name: 'Heatmap',
    info: {
      description: 'Heatmap panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/savantly-heatmap-panel/0.2.1/public/plugins/savantly-heatmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/savantly-heatmap-panel/0.2.1/public/plugins/savantly-heatmap-panel/img/logo.svg',
      },
      version: '0.2.1',
    },
    baseUrl: 'plugin-cdn/savantly-heatmap-panel/0.2.1/public/plugins/savantly-heatmap-panel',
    module: 'plugin-cdn/savantly-heatmap-panel/0.2.1/public/plugins/savantly-heatmap-panel/module',
  },
  {
    id: 'mtanda-heatmap-epoch-panel',
    name: 'HeatmapEpoch',
    info: {
      description: 'Heatmap Panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/mtanda-heatmap-epoch-panel/0.1.8/public/plugins/mtanda-heatmap-epoch-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/mtanda-heatmap-epoch-panel/0.1.8/public/plugins/mtanda-heatmap-epoch-panel/img/logo.svg',
      },
      version: '0.1.8',
    },
    baseUrl: 'plugin-cdn/mtanda-heatmap-epoch-panel/0.1.8/public/plugins/mtanda-heatmap-epoch-panel',
    module: 'plugin-cdn/mtanda-heatmap-epoch-panel/0.1.8/public/plugins/mtanda-heatmap-epoch-panel/module',
  },
  {
    id: 'marcusolsson-hexmap-panel',
    name: 'Hexmap',
    info: {
      description: 'Hexagonal tiling of data',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-hexmap-panel/0.3.3/public/plugins/marcusolsson-hexmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-hexmap-panel/0.3.3/public/plugins/marcusolsson-hexmap-panel/img/logo.svg',
      },
      version: '0.3.3',
    },
    baseUrl: 'plugin-cdn/marcusolsson-hexmap-panel/0.3.3/public/plugins/marcusolsson-hexmap-panel',
    module: 'plugin-cdn/marcusolsson-hexmap-panel/0.3.3/public/plugins/marcusolsson-hexmap-panel/module',
  },
  {
    id: 'mtanda-histogram-panel',
    name: 'Histogram',
    info: {
      description: 'Histogram Panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/mtanda-histogram-panel/0.1.7/public/plugins/mtanda-histogram-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/mtanda-histogram-panel/0.1.7/public/plugins/mtanda-histogram-panel/img/logo.svg',
      },
      version: '0.1.7',
    },
    baseUrl: 'plugin-cdn/mtanda-histogram-panel/0.1.7/public/plugins/mtanda-histogram-panel',
    module: 'plugin-cdn/mtanda-histogram-panel/0.1.7/public/plugins/mtanda-histogram-panel/module',
  },
  {
    id: 'marcusolsson-hourly-heatmap-panel',
    name: 'Hourly heatmap',
    info: {
      description: 'Heatmap for the hours of the day',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-hourly-heatmap-panel/2.0.1/public/plugins/marcusolsson-hourly-heatmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-hourly-heatmap-panel/2.0.1/public/plugins/marcusolsson-hourly-heatmap-panel/img/logo.svg',
      },
      version: '2.0.1',
    },
    baseUrl: 'plugin-cdn/marcusolsson-hourly-heatmap-panel/2.0.1/public/plugins/marcusolsson-hourly-heatmap-panel',
    module:
      'plugin-cdn/marcusolsson-hourly-heatmap-panel/2.0.1/public/plugins/marcusolsson-hourly-heatmap-panel/module',
  },
  {
    id: 'aidanmountford-html-panel',
    name: 'HTML',
    info: {
      description: 'HTML panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/aidanmountford-html-panel/0.0.2/public/plugins/aidanmountford-html-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/aidanmountford-html-panel/0.0.2/public/plugins/aidanmountford-html-panel/img/logo.svg',
      },
      version: '0.0.2',
    },
    baseUrl: 'plugin-cdn/aidanmountford-html-panel/0.0.2/public/plugins/aidanmountford-html-panel',
    module: 'plugin-cdn/aidanmountford-html-panel/0.0.2/public/plugins/aidanmountford-html-panel/module',
  },
  {
    id: 'gapit-htmlgraphics-panel',
    name: 'HTML graphics',
    info: {
      description: 'Grafana panel for displaying metric sensitive HTML and SVG graphics',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/gapit-htmlgraphics-panel/2.1.1/public/plugins/gapit-htmlgraphics-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/gapit-htmlgraphics-panel/2.1.1/public/plugins/gapit-htmlgraphics-panel/img/logo.svg',
      },
      version: '2.1.1',
    },
    baseUrl: 'plugin-cdn/gapit-htmlgraphics-panel/2.1.1/public/plugins/gapit-htmlgraphics-panel',
    module: 'plugin-cdn/gapit-htmlgraphics-panel/2.1.1/public/plugins/gapit-htmlgraphics-panel/module',
  },
  {
    id: 'pierosavi-imageit-panel',
    name: 'ImageIt',
    info: {
      description: 'Add Measurements to a Picture in Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/pierosavi-imageit-panel/1.0.7/public/plugins/pierosavi-imageit-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/pierosavi-imageit-panel/1.0.7/public/plugins/pierosavi-imageit-panel/img/logo.svg',
      },
      version: '1.0.7',
    },
    baseUrl: 'plugin-cdn/pierosavi-imageit-panel/1.0.7/public/plugins/pierosavi-imageit-panel',
    module: 'plugin-cdn/pierosavi-imageit-panel/1.0.7/public/plugins/pierosavi-imageit-panel/module',
  },
  {
    id: 'natel-influx-admin-panel',
    name: 'Influx Admin',
    info: {
      description: 'InfluxDB admin for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/natel-influx-admin-panel/0.0.6/public/plugins/natel-influx-admin-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/natel-influx-admin-panel/0.0.6/public/plugins/natel-influx-admin-panel/img/logo.svg',
      },
      version: '0.0.6',
    },
    baseUrl: 'plugin-cdn/natel-influx-admin-panel/0.0.6/public/plugins/natel-influx-admin-panel',
    module: 'plugin-cdn/natel-influx-admin-panel/0.0.6/public/plugins/natel-influx-admin-panel/module',
  },
  {
    id: 'woutervh-mapbox-panel',
    name: 'mapbox-panel',
    info: {
      description: 'Grafana panel that displays spatial data on mapbox-gl.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/woutervh-mapbox-panel/1.0.0/public/plugins/woutervh-mapbox-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/woutervh-mapbox-panel/1.0.0/public/plugins/woutervh-mapbox-panel/img/logo.svg',
      },
      version: '1.0.0',
    },
    baseUrl: 'plugin-cdn/woutervh-mapbox-panel/1.0.0/public/plugins/woutervh-mapbox-panel',
    module: 'plugin-cdn/woutervh-mapbox-panel/1.0.0/public/plugins/woutervh-mapbox-panel/module',
  },
  {
    id: 'flaminggoat-maptrack3d-panel',
    name: 'MapTrack3D',
    info: {
      description: 'A plugin for Grafana that visualizes GPS points on a 3D globe',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/flaminggoat-maptrack3d-panel/0.1.9/public/plugins/flaminggoat-maptrack3d-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/flaminggoat-maptrack3d-panel/0.1.9/public/plugins/flaminggoat-maptrack3d-panel/img/logo.svg',
      },
      version: '0.1.9',
    },
    baseUrl: 'plugin-cdn/flaminggoat-maptrack3d-panel/0.1.9/public/plugins/flaminggoat-maptrack3d-panel',
    module: 'plugin-cdn/flaminggoat-maptrack3d-panel/0.1.9/public/plugins/flaminggoat-maptrack3d-panel/module',
  },
  {
    id: 'thiagoarrais-matomotracking-panel',
    name: 'Matomo Tracker',
    info: {
      description: 'Panel for tracking via Matomo',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/thiagoarrais-matomotracking-panel/0.2.3/public/plugins/thiagoarrais-matomotracking-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/thiagoarrais-matomotracking-panel/0.2.3/public/plugins/thiagoarrais-matomotracking-panel/img/logo.svg',
      },
      version: '0.2.3',
    },
    baseUrl: 'plugin-cdn/thiagoarrais-matomotracking-panel/0.2.3/public/plugins/thiagoarrais-matomotracking-panel',
    module:
      'plugin-cdn/thiagoarrais-matomotracking-panel/0.2.3/public/plugins/thiagoarrais-matomotracking-panel/module',
  },
  {
    id: 'boazreicher-mosaicplot-panel',
    name: 'Mosaic',
    info: {
      description: 'Mosaic Plot Panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/boazreicher-mosaicplot-panel/1.0.14/public/plugins/boazreicher-mosaicplot-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/boazreicher-mosaicplot-panel/1.0.14/public/plugins/boazreicher-mosaicplot-panel/img/logo.svg',
      },
      version: '1.0.14',
    },
    baseUrl: 'plugin-cdn/boazreicher-mosaicplot-panel/1.0.14/public/plugins/boazreicher-mosaicplot-panel',
    module: 'plugin-cdn/boazreicher-mosaicplot-panel/1.0.14/public/plugins/boazreicher-mosaicplot-panel/module',
  },
  {
    id: 'michaeldmoore-multistat-panel',
    name: 'Multistat',
    info: {
      description: 'Enhanced version of built-in SingleStat panel, for queries involving multi-valued recordsets',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/michaeldmoore-multistat-panel/1.7.2/public/plugins/michaeldmoore-multistat-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/michaeldmoore-multistat-panel/1.7.2/public/plugins/michaeldmoore-multistat-panel/img/logo.svg',
      },
      version: '1.7.2',
    },
    baseUrl: 'plugin-cdn/michaeldmoore-multistat-panel/1.7.2/public/plugins/michaeldmoore-multistat-panel',
    module: 'plugin-cdn/michaeldmoore-multistat-panel/1.7.2/public/plugins/michaeldmoore-multistat-panel/module',
  },
  {
    id: 'knightss27-weathermap-panel',
    name: 'Network Weathermap',
    info: {
      description: 'A simple & sleek network weathermap.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/knightss27-weathermap-panel/0.3.3/public/plugins/knightss27-weathermap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/knightss27-weathermap-panel/0.3.3/public/plugins/knightss27-weathermap-panel/img/logo.svg',
      },
      version: '0.3.3',
    },
    baseUrl: 'plugin-cdn/knightss27-weathermap-panel/0.3.3/public/plugins/knightss27-weathermap-panel',
    module: 'plugin-cdn/knightss27-weathermap-panel/0.3.3/public/plugins/knightss27-weathermap-panel/module',
  },
  {
    id: 'orchestracities-iconstat-panel',
    name: 'Orchestra Cities Icon Stat Panel',
    info: {
      description: '',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/orchestracities-iconstat-panel/1.2.3/public/plugins/orchestracities-iconstat-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/orchestracities-iconstat-panel/1.2.3/public/plugins/orchestracities-iconstat-panel/img/logo.svg',
      },
      version: '1.2.3',
    },
    baseUrl: 'plugin-cdn/orchestracities-iconstat-panel/1.2.3/public/plugins/orchestracities-iconstat-panel',
    module: 'plugin-cdn/orchestracities-iconstat-panel/1.2.3/public/plugins/orchestracities-iconstat-panel/module',
  },
  {
    id: 'orchestracities-map-panel',
    name: 'Orchestra Cities Map',
    info: {
      description: 'Orchestra Cities Map',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/orchestracities-map-panel/1.4.4/public/plugins/orchestracities-map-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/orchestracities-map-panel/1.4.4/public/plugins/orchestracities-map-panel/img/logo.svg',
      },
      version: '1.4.4',
    },
    baseUrl: 'plugin-cdn/orchestracities-map-panel/1.4.4/public/plugins/orchestracities-map-panel',
    module: 'plugin-cdn/orchestracities-map-panel/1.4.4/public/plugins/orchestracities-map-panel/module',
  },
  {
    id: 'timomyl-organisations-panel',
    name: 'Organisations',
    info: {
      description: 'Organisations Panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/timomyl-organisations-panel/1.4.0/public/plugins/timomyl-organisations-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/timomyl-organisations-panel/1.4.0/public/plugins/timomyl-organisations-panel/img/logo.svg',
      },
      version: '1.4.0',
    },
    baseUrl: 'plugin-cdn/timomyl-organisations-panel/1.4.0/public/plugins/timomyl-organisations-panel',
    module: 'plugin-cdn/timomyl-organisations-panel/1.4.0/public/plugins/timomyl-organisations-panel/module',
  },
  {
    id: 'isaozler-paretochart-panel',
    name: 'Pareto Chart',
    info: {
      description: 'Pareto Chart for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/isaozler-paretochart-panel/0.3.4/public/plugins/isaozler-paretochart-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/isaozler-paretochart-panel/0.3.4/public/plugins/isaozler-paretochart-panel/img/logo.svg',
      },
      version: '0.3.4',
    },
    baseUrl: 'plugin-cdn/isaozler-paretochart-panel/0.3.4/public/plugins/isaozler-paretochart-panel',
    module: 'plugin-cdn/isaozler-paretochart-panel/0.3.4/public/plugins/isaozler-paretochart-panel/module',
  },
  {
    id: 'zuburqan-parity-report-panel',
    name: 'Parity Report',
    info: {
      description: 'Parity report plugin to compare metrics',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/zuburqan-parity-report-panel/1.2.2/public/plugins/zuburqan-parity-report-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/zuburqan-parity-report-panel/1.2.2/public/plugins/zuburqan-parity-report-panel/img/logo.svg',
      },
      version: '1.2.2',
    },
    baseUrl: 'plugin-cdn/zuburqan-parity-report-panel/1.2.2/public/plugins/zuburqan-parity-report-panel',
    module: 'plugin-cdn/zuburqan-parity-report-panel/1.2.2/public/plugins/zuburqan-parity-report-panel/module',
  },
  {
    id: 'jeanbaptistewatenberg-percent-panel',
    name: 'Percent+',
    info: {
      description: 'Grafana percent+ stat panel. Simply computes and display percent given two metrics.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/jeanbaptistewatenberg-percent-panel/1.0.6/public/plugins/jeanbaptistewatenberg-percent-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/jeanbaptistewatenberg-percent-panel/1.0.6/public/plugins/jeanbaptistewatenberg-percent-panel/img/logo.svg',
      },
      version: '1.0.6',
    },
    baseUrl: 'plugin-cdn/jeanbaptistewatenberg-percent-panel/1.0.6/public/plugins/jeanbaptistewatenberg-percent-panel',
    module:
      'plugin-cdn/jeanbaptistewatenberg-percent-panel/1.0.6/public/plugins/jeanbaptistewatenberg-percent-panel/module',
  },
  {
    id: 'nikosc-percenttrend-panel',
    name: 'Percentage Trend',
    info: {
      description: 'Percent change with trend display',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/nikosc-percenttrend-panel/1.0.7/public/plugins/nikosc-percenttrend-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/nikosc-percenttrend-panel/1.0.7/public/plugins/nikosc-percenttrend-panel/img/logo.svg',
      },
      version: '1.0.7',
    },
    baseUrl: 'plugin-cdn/nikosc-percenttrend-panel/1.0.7/public/plugins/nikosc-percenttrend-panel',
    module: 'plugin-cdn/nikosc-percenttrend-panel/1.0.7/public/plugins/nikosc-percenttrend-panel/module',
  },
  {
    id: 'sskgo-perfcurve-panel',
    name: 'PerfCurve',
    info: {
      description: 'Plot rotating machine operation point on a performance curve.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/sskgo-perfcurve-panel/1.5.0/public/plugins/sskgo-perfcurve-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/sskgo-perfcurve-panel/1.5.0/public/plugins/sskgo-perfcurve-panel/img/logo.svg',
      },
      version: '1.5.0',
    },
    baseUrl: 'plugin-cdn/sskgo-perfcurve-panel/1.5.0/public/plugins/sskgo-perfcurve-panel',
    module: 'plugin-cdn/sskgo-perfcurve-panel/1.5.0/public/plugins/sskgo-perfcurve-panel/module',
  },
  {
    id: 'philipsgis-phlowchart-panel',
    name: 'Phlowchart',
    info: {
      description: 'A Grafana panel plugin to render interactive flowchart visualization of directed graph data.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/philipsgis-phlowchart-panel/0.1.0/public/plugins/philipsgis-phlowchart-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/philipsgis-phlowchart-panel/0.1.0/public/plugins/philipsgis-phlowchart-panel/img/logo.svg',
      },
      version: '0.1.0',
    },
    baseUrl: 'plugin-cdn/philipsgis-phlowchart-panel/0.1.0/public/plugins/philipsgis-phlowchart-panel',
    module: 'plugin-cdn/philipsgis-phlowchart-panel/0.1.0/public/plugins/philipsgis-phlowchart-panel/module',
  },
  {
    id: 'bessler-pictureit-panel',
    name: 'PictureIt',
    info: {
      description: 'Add Measurements to a Picture in Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/bessler-pictureit-panel/1.0.1/public/plugins/bessler-pictureit-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/bessler-pictureit-panel/1.0.1/public/plugins/bessler-pictureit-panel/img/logo.svg',
      },
      version: '1.0.1',
    },
    baseUrl: 'plugin-cdn/bessler-pictureit-panel/1.0.1/public/plugins/bessler-pictureit-panel',
    module: 'plugin-cdn/bessler-pictureit-panel/1.0.1/public/plugins/bessler-pictureit-panel/module',
  },
  {
    id: 'natel-plotly-panel',
    name: 'Plotly',
    info: {
      description: 'Scatter plots and more',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/natel-plotly-panel/0.0.7/public/plugins/natel-plotly-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/natel-plotly-panel/0.0.7/public/plugins/natel-plotly-panel/img/logo.svg',
      },
      version: '0.0.7',
    },
    baseUrl: 'plugin-cdn/natel-plotly-panel/0.0.7/public/plugins/natel-plotly-panel',
    module: 'plugin-cdn/natel-plotly-panel/0.0.7/public/plugins/natel-plotly-panel/module',
  },
  {
    id: 'nline-plotlyjs-panel',
    name: 'Plotly',
    info: {
      description: 'Render charts with Plotly.js',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/nline-plotlyjs-panel/1.1.0/public/plugins/nline-plotlyjs-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/nline-plotlyjs-panel/1.1.0/public/plugins/nline-plotlyjs-panel/img/logo.svg',
      },
      version: '1.1.0',
    },
    baseUrl: 'plugin-cdn/nline-plotlyjs-panel/1.1.0/public/plugins/nline-plotlyjs-panel',
    module: 'plugin-cdn/nline-plotlyjs-panel/1.1.0/public/plugins/nline-plotlyjs-panel/module',
  },
  {
    id: 'ae3e-plotly-panel',
    name: 'Plotly panel',
    info: {
      description: 'Render chart from any datasource with Plotly javascript library',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/ae3e-plotly-panel/0.5.0/public/plugins/ae3e-plotly-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/ae3e-plotly-panel/0.5.0/public/plugins/ae3e-plotly-panel/img/logo.svg',
      },
      version: '0.5.0',
    },
    baseUrl: 'plugin-cdn/ae3e-plotly-panel/0.5.0/public/plugins/ae3e-plotly-panel',
    module: 'plugin-cdn/ae3e-plotly-panel/0.5.0/public/plugins/ae3e-plotly-panel/module',
  },
  {
    id: 'grafana-polystat-panel',
    name: 'Polystat',
    info: {
      description: 'Polystat panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/grafana-polystat-panel/2.0.4/public/plugins/grafana-polystat-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/grafana-polystat-panel/2.0.4/public/plugins/grafana-polystat-panel/img/logo.svg',
      },
      version: '2.0.4',
    },
    baseUrl: 'plugin-cdn/grafana-polystat-panel/2.0.4/public/plugins/grafana-polystat-panel',
    module: 'plugin-cdn/grafana-polystat-panel/2.0.4/public/plugins/grafana-polystat-panel/module',
  },
  {
    id: 'corpglory-progresslist-panel',
    name: 'Progress List',
    info: {
      description: 'A panel showing list of progress-like items in one board',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/corpglory-progresslist-panel/1.0.6/public/plugins/corpglory-progresslist-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/corpglory-progresslist-panel/1.0.6/public/plugins/corpglory-progresslist-panel/img/logo.svg',
      },
      version: '1.0.6',
    },
    baseUrl: 'plugin-cdn/corpglory-progresslist-panel/1.0.6/public/plugins/corpglory-progresslist-panel',
    module: 'plugin-cdn/corpglory-progresslist-panel/1.0.6/public/plugins/corpglory-progresslist-panel/module',
  },
  {
    id: 'ventura-psychrometric-panel',
    name: 'Psychrometric Chart',
    info: {
      description: 'View air conditions on a psychrometric chart.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/ventura-psychrometric-panel/2.0.0/public/plugins/ventura-psychrometric-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/ventura-psychrometric-panel/2.0.0/public/plugins/ventura-psychrometric-panel/img/logo.svg',
      },
      version: '2.0.0',
    },
    baseUrl: 'plugin-cdn/ventura-psychrometric-panel/2.0.0/public/plugins/ventura-psychrometric-panel',
    module: 'plugin-cdn/ventura-psychrometric-panel/2.0.0/public/plugins/ventura-psychrometric-panel/module',
  },
  {
    id: 'snuids-radar-panel',
    name: 'Radar Graph',
    info: {
      description: 'Radar Graph for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/snuids-radar-panel/1.5.1/public/plugins/snuids-radar-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/snuids-radar-panel/1.5.1/public/plugins/snuids-radar-panel/img/logo.svg',
      },
      version: '1.5.1',
    },
    baseUrl: 'plugin-cdn/snuids-radar-panel/1.5.1/public/plugins/snuids-radar-panel',
    module: 'plugin-cdn/snuids-radar-panel/1.5.1/public/plugins/snuids-radar-panel/module',
  },
  {
    id: 'netsage-sankey-panel',
    name: 'Sankey Panel',
    info: {
      description: 'Sankey Panel Plugin for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/netsage-sankey-panel/1.0.6/public/plugins/netsage-sankey-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/netsage-sankey-panel/1.0.6/public/plugins/netsage-sankey-panel/img/logo.svg',
      },
      version: '1.0.6',
    },
    baseUrl: 'plugin-cdn/netsage-sankey-panel/1.0.6/public/plugins/netsage-sankey-panel',
    module: 'plugin-cdn/netsage-sankey-panel/1.0.6/public/plugins/netsage-sankey-panel/module',
  },
  {
    id: 'scadavis-synoptic-panel',
    name: 'SCADAvis Synoptic Panel',
    info: {
      description: 'SCADA-like synoptic panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/scadavis-synoptic-panel/1.0.5/public/plugins/scadavis-synoptic-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/scadavis-synoptic-panel/1.0.5/public/plugins/scadavis-synoptic-panel/img/logo.svg',
      },
      version: '1.0.5',
    },
    baseUrl: 'plugin-cdn/scadavis-synoptic-panel/1.0.5/public/plugins/scadavis-synoptic-panel',
    module: 'plugin-cdn/scadavis-synoptic-panel/1.0.5/public/plugins/scadavis-synoptic-panel/module',
  },
  {
    id: 'michaeldmoore-scatter-panel',
    name: 'Scatter',
    info: {
      description: 'A really easy-to-use scatter-plot plugin panel for table formatted Grafana data',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/michaeldmoore-scatter-panel/1.2.0/public/plugins/michaeldmoore-scatter-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/michaeldmoore-scatter-panel/1.2.0/public/plugins/michaeldmoore-scatter-panel/img/logo.svg',
      },
      version: '1.2.0',
    },
    baseUrl: 'plugin-cdn/michaeldmoore-scatter-panel/1.2.0/public/plugins/michaeldmoore-scatter-panel',
    module: 'plugin-cdn/michaeldmoore-scatter-panel/1.2.0/public/plugins/michaeldmoore-scatter-panel/module',
  },
  {
    id: 'mxswat-separator-panel',
    name: 'Separator',
    info: {
      description: 'A simple separator panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/mxswat-separator-panel/1.0.1/public/plugins/mxswat-separator-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/mxswat-separator-panel/1.0.1/public/plugins/mxswat-separator-panel/img/logo.svg',
      },
      version: '1.0.1',
    },
    baseUrl: 'plugin-cdn/mxswat-separator-panel/1.0.1/public/plugins/mxswat-separator-panel',
    module: 'plugin-cdn/mxswat-separator-panel/1.0.1/public/plugins/mxswat-separator-panel/module',
  },
  {
    id: 'novatec-sdg-panel',
    name: 'Service Dependency Graph',
    info: {
      description:
        'Service Dependency Graph panel for Grafana. Shows metric-based, dynamic dependency graph between services, indicates responsetime, load and error rate statistic for individual services and communication edges. Shows communication to external services, such as Web calls, database calls, message queues, LDAP calls, etc. Provides a details dialog for each selected service that shows statistics about incoming and outgoing traffic.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/novatec-sdg-panel/4.0.3/public/plugins/novatec-sdg-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/novatec-sdg-panel/4.0.3/public/plugins/novatec-sdg-panel/img/logo.svg',
      },
      version: '4.0.3',
    },
    baseUrl: 'plugin-cdn/novatec-sdg-panel/4.0.3/public/plugins/novatec-sdg-panel',
    module: 'plugin-cdn/novatec-sdg-panel/4.0.3/public/plugins/novatec-sdg-panel/module',
  },
  {
    id: 'isaozler-shiftselector-panel',
    name: 'Shift Selector',
    info: {
      description:
        'The shift selector allows you to adjust the time range of your grafana dashboard to one specific shift or a range of shifts.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/isaozler-shiftselector-panel/0.0.3/public/plugins/isaozler-shiftselector-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/isaozler-shiftselector-panel/0.0.3/public/plugins/isaozler-shiftselector-panel/img/logo.svg',
      },
      version: '0.0.3',
    },
    baseUrl: 'plugin-cdn/isaozler-shiftselector-panel/0.0.3/public/plugins/isaozler-shiftselector-panel',
    module: 'plugin-cdn/isaozler-shiftselector-panel/0.0.3/public/plugins/isaozler-shiftselector-panel/module',
  },
  {
    id: 'boazreicher-sierraplot-panel',
    name: 'Sierra Plot',
    info: {
      description: 'Sierra Plot Panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/boazreicher-sierraplot-panel/1.0.14/public/plugins/boazreicher-sierraplot-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/boazreicher-sierraplot-panel/1.0.14/public/plugins/boazreicher-sierraplot-panel/img/logo.svg',
      },
      version: '1.0.14',
    },
    baseUrl: 'plugin-cdn/boazreicher-sierraplot-panel/1.0.14/public/plugins/boazreicher-sierraplot-panel',
    module: 'plugin-cdn/boazreicher-sierraplot-panel/1.0.14/public/plugins/boazreicher-sierraplot-panel/module',
  },
  {
    id: 'grafana-singlestat-panel',
    name: 'Singlestat',
    info: {
      description: 'Singlestat Panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/grafana-singlestat-panel/2.0.0/public/plugins/grafana-singlestat-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/grafana-singlestat-panel/2.0.0/public/plugins/grafana-singlestat-panel/img/logo.svg',
      },
      version: '2.0.0',
    },
    baseUrl: 'plugin-cdn/grafana-singlestat-panel/2.0.0/public/plugins/grafana-singlestat-panel',
    module: 'plugin-cdn/grafana-singlestat-panel/2.0.0/public/plugins/grafana-singlestat-panel/module',
  },
  {
    id: 'blackmirror1-singlestat-math-panel',
    name: 'Singlestat Math',
    info: {
      description: 'Single Stat panel with math.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/blackmirror1-singlestat-math-panel/1.1.8/public/plugins/blackmirror1-singlestat-math-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/blackmirror1-singlestat-math-panel/1.1.8/public/plugins/blackmirror1-singlestat-math-panel/img/logo.svg',
      },
      version: '1.1.8',
    },
    baseUrl: 'plugin-cdn/blackmirror1-singlestat-math-panel/1.1.8/public/plugins/blackmirror1-singlestat-math-panel',
    module:
      'plugin-cdn/blackmirror1-singlestat-math-panel/1.1.8/public/plugins/blackmirror1-singlestat-math-panel/module',
  },
  {
    id: 'netsage-slopegraph-panel',
    name: 'Slope Graph Panel',
    info: {
      description: 'Slope Graph Panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/netsage-slopegraph-panel/1.0.6/public/plugins/netsage-slopegraph-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/netsage-slopegraph-panel/1.0.6/public/plugins/netsage-slopegraph-panel/img/logo.svg',
      },
      version: '1.0.6',
    },
    baseUrl: 'plugin-cdn/netsage-slopegraph-panel/1.0.6/public/plugins/netsage-slopegraph-panel',
    module: 'plugin-cdn/netsage-slopegraph-panel/1.0.6/public/plugins/netsage-slopegraph-panel/module',
  },
  {
    id: 'blackmirror1-statusbygroup-panel',
    name: 'Status By Group Panel',
    info: {
      description: 'Status By Group Panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/blackmirror1-statusbygroup-panel/1.1.2/public/plugins/blackmirror1-statusbygroup-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/blackmirror1-statusbygroup-panel/1.1.2/public/plugins/blackmirror1-statusbygroup-panel/img/logo.svg',
      },
      version: '1.1.2',
    },
    baseUrl: 'plugin-cdn/blackmirror1-statusbygroup-panel/1.1.2/public/plugins/blackmirror1-statusbygroup-panel',
    module: 'plugin-cdn/blackmirror1-statusbygroup-panel/1.1.2/public/plugins/blackmirror1-statusbygroup-panel/module',
  },
  {
    id: 'vonage-status-panel',
    name: 'Status Panel',
    info: {
      description: 'Status Panel for Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/vonage-status-panel/1.0.11/public/plugins/vonage-status-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/vonage-status-panel/1.0.11/public/plugins/vonage-status-panel/img/logo.svg',
      },
      version: '1.0.11',
    },
    baseUrl: 'plugin-cdn/vonage-status-panel/1.0.11/public/plugins/vonage-status-panel',
    module: 'plugin-cdn/vonage-status-panel/1.0.11/public/plugins/vonage-status-panel/module',
  },
  {
    id: 'flant-statusmap-panel',
    name: 'Statusmap',
    info: {
      description: 'Statusmap panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/flant-statusmap-panel/0.5.1/public/plugins/flant-statusmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/flant-statusmap-panel/0.5.1/public/plugins/flant-statusmap-panel/img/logo.svg',
      },
      version: '0.5.1',
    },
    baseUrl: 'plugin-cdn/flant-statusmap-panel/0.5.1/public/plugins/flant-statusmap-panel',
    module: 'plugin-cdn/flant-statusmap-panel/0.5.1/public/plugins/flant-statusmap-panel/module',
  },
  {
    id: 'marcuscalidus-svg-panel',
    name: 'SVG',
    info: {
      description: 'SVG panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/marcuscalidus-svg-panel/0.3.4/public/plugins/marcuscalidus-svg-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/marcuscalidus-svg-panel/0.3.4/public/plugins/marcuscalidus-svg-panel/img/logo.svg',
      },
      version: '0.3.4',
    },
    baseUrl: 'plugin-cdn/marcuscalidus-svg-panel/0.3.4/public/plugins/marcuscalidus-svg-panel',
    module: 'plugin-cdn/marcuscalidus-svg-panel/0.3.4/public/plugins/marcuscalidus-svg-panel/module',
  },
  {
    id: 'williamvenner-timepickerbuttons-panel',
    name: 'Timepicker Buttons Panel',
    info: {
      description: 'Datasource-configured buttons panel plugin which set the time range of your Grafana dashboard',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/williamvenner-timepickerbuttons-panel/4.1.1/public/plugins/williamvenner-timepickerbuttons-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/williamvenner-timepickerbuttons-panel/4.1.1/public/plugins/williamvenner-timepickerbuttons-panel/img/logo.svg',
      },
      version: '4.1.1',
    },
    baseUrl:
      'plugin-cdn/williamvenner-timepickerbuttons-panel/4.1.1/public/plugins/williamvenner-timepickerbuttons-panel',
    module:
      'plugin-cdn/williamvenner-timepickerbuttons-panel/4.1.1/public/plugins/williamvenner-timepickerbuttons-panel/module',
  },
  {
    id: 'gretamosa-topology-panel',
    name: 'Topology Panel',
    info: {
      description: 'Sigma.js graph panel for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/gretamosa-topology-panel/1.0.1/public/plugins/gretamosa-topology-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/gretamosa-topology-panel/1.0.1/public/plugins/gretamosa-topology-panel/img/logo.svg',
      },
      version: '1.0.1',
    },
    baseUrl: 'plugin-cdn/gretamosa-topology-panel/1.0.1/public/plugins/gretamosa-topology-panel',
    module: 'plugin-cdn/gretamosa-topology-panel/1.0.1/public/plugins/gretamosa-topology-panel/module',
  },
  {
    id: 'gowee-traceroutemap-panel',
    name: 'Traceroute Map Panel',
    info: {
      description: 'A Grafana panel that visualize traceroute hops in a map',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/gowee-traceroutemap-panel/0.3.0/public/plugins/gowee-traceroutemap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/gowee-traceroutemap-panel/0.3.0/public/plugins/gowee-traceroutemap-panel/img/logo.svg',
      },
      version: '0.3.0',
    },
    baseUrl: 'plugin-cdn/gowee-traceroutemap-panel/0.3.0/public/plugins/gowee-traceroutemap-panel',
    module: 'plugin-cdn/gowee-traceroutemap-panel/0.3.0/public/plugins/gowee-traceroutemap-panel/module',
  },
  {
    id: 'alexandra-trackmap-panel',
    name: 'Track Map',
    info: {
      description:
        'Map plugin to visualize timeseries data from geo:json or NGSIv2 sources as either a Ant-path, Hexbin, or Heatmap.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/alexandra-trackmap-panel/1.2.6/public/plugins/alexandra-trackmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/alexandra-trackmap-panel/1.2.6/public/plugins/alexandra-trackmap-panel/img/logo.svg',
      },
      version: '1.2.6',
    },
    baseUrl: 'plugin-cdn/alexandra-trackmap-panel/1.2.6/public/plugins/alexandra-trackmap-panel',
    module: 'plugin-cdn/alexandra-trackmap-panel/1.2.6/public/plugins/alexandra-trackmap-panel/module',
  },
  {
    id: 'pr0ps-trackmap-panel',
    name: 'TrackMap',
    info: {
      description: 'A plugin for Grafana that visualizes GPS points as a line on an interactive map.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/pr0ps-trackmap-panel/2.1.2/public/plugins/pr0ps-trackmap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/pr0ps-trackmap-panel/2.1.2/public/plugins/pr0ps-trackmap-panel/img/logo.svg',
      },
      version: '2.1.2',
    },
    baseUrl: 'plugin-cdn/pr0ps-trackmap-panel/2.1.2/public/plugins/pr0ps-trackmap-panel',
    module: 'plugin-cdn/pr0ps-trackmap-panel/2.1.2/public/plugins/pr0ps-trackmap-panel/module',
  },
  {
    id: 'snuids-trafficlights-panel',
    name: 'Traffic Lights',
    info: {
      description: 'Traffic lights for grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/snuids-trafficlights-panel/1.5.1/public/plugins/snuids-trafficlights-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/snuids-trafficlights-panel/1.5.1/public/plugins/snuids-trafficlights-panel/img/logo.svg',
      },
      version: '1.5.1',
    },
    baseUrl: 'plugin-cdn/snuids-trafficlights-panel/1.5.1/public/plugins/snuids-trafficlights-panel',
    module: 'plugin-cdn/snuids-trafficlights-panel/1.5.1/public/plugins/snuids-trafficlights-panel/module',
  },
  {
    id: 'smartmakers-trafficlight-panel',
    name: 'TrafficLight',
    info: {
      description: 'Add colour indicator for measurements to a picture in Grafana',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/smartmakers-trafficlight-panel/1.0.1/public/plugins/smartmakers-trafficlight-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/smartmakers-trafficlight-panel/1.0.1/public/plugins/smartmakers-trafficlight-panel/img/logo.svg',
      },
      version: '1.0.1',
    },
    baseUrl: 'plugin-cdn/smartmakers-trafficlight-panel/1.0.1/public/plugins/smartmakers-trafficlight-panel',
    module: 'plugin-cdn/smartmakers-trafficlight-panel/1.0.1/public/plugins/smartmakers-trafficlight-panel/module',
  },
  {
    id: 'pgillich-tree-panel',
    name: 'Tree View',
    info: {
      description:
        'Tree View for JSON API datasource. It can show JSON REST API responses, for example: Kubernetes API',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/pgillich-tree-panel/0.1.9/public/plugins/pgillich-tree-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/pgillich-tree-panel/0.1.9/public/plugins/pgillich-tree-panel/img/logo.svg',
      },
      version: '0.1.9',
    },
    baseUrl: 'plugin-cdn/pgillich-tree-panel/0.1.9/public/plugins/pgillich-tree-panel',
    module: 'plugin-cdn/pgillich-tree-panel/0.1.9/public/plugins/pgillich-tree-panel/module',
  },
  {
    id: 'marcusolsson-treemap-panel',
    name: 'Treemap',
    info: {
      description: 'Area-based visualization of hierarchical data',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-treemap-panel/2.0.0/public/plugins/marcusolsson-treemap-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/marcusolsson-treemap-panel/2.0.0/public/plugins/marcusolsson-treemap-panel/img/logo.svg',
      },
      version: '2.0.0',
    },
    baseUrl: 'plugin-cdn/marcusolsson-treemap-panel/2.0.0/public/plugins/marcusolsson-treemap-panel',
    module: 'plugin-cdn/marcusolsson-treemap-panel/2.0.0/public/plugins/marcusolsson-treemap-panel/module',
  },
  {
    id: 'factry-untimely-panel',
    name: 'Untimely',
    info: {
      description: 'Grafana panel for displaying time series data as function of distance',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/factry-untimely-panel/0.3.0/public/plugins/factry-untimely-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/factry-untimely-panel/0.3.0/public/plugins/factry-untimely-panel/img/logo.svg',
      },
      version: '0.3.0',
    },
    baseUrl: 'plugin-cdn/factry-untimely-panel/0.3.0/public/plugins/factry-untimely-panel',
    module: 'plugin-cdn/factry-untimely-panel/0.3.0/public/plugins/factry-untimely-panel/module',
  },
  {
    id: 'innius-video-panel',
    name: 'Video',
    info: {
      description: 'Display video from a URL, YouTube ID, or an iFrame.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/innius-video-panel/1.0.5/public/plugins/innius-video-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/innius-video-panel/1.0.5/public/plugins/innius-video-panel/img/logo.svg',
      },
      version: '1.0.5',
    },
    baseUrl: 'plugin-cdn/innius-video-panel/1.0.5/public/plugins/innius-video-panel',
    module: 'plugin-cdn/innius-video-panel/1.0.5/public/plugins/innius-video-panel/module',
  },
  {
    id: 'auxmoney-waterfall-panel',
    name: 'Waterfall Panel',
    info: {
      description: 'A waterfall panel for a single time-series',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/auxmoney-waterfall-panel/1.0.6/public/plugins/auxmoney-waterfall-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/auxmoney-waterfall-panel/1.0.6/public/plugins/auxmoney-waterfall-panel/img/logo.svg',
      },
      version: '1.0.6',
    },
    baseUrl: 'plugin-cdn/auxmoney-waterfall-panel/1.0.6/public/plugins/auxmoney-waterfall-panel',
    module: 'plugin-cdn/auxmoney-waterfall-panel/1.0.6/public/plugins/auxmoney-waterfall-panel/module',
  },
  {
    id: 'lework-lenav-panel',
    name: 'Website Navigation',
    info: {
      description: 'A panel to display website navigation.',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/lework-lenav-panel/1.0.0/public/plugins/lework-lenav-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/lework-lenav-panel/1.0.0/public/plugins/lework-lenav-panel/img/logo.svg',
      },
      version: '1.0.0',
    },
    baseUrl: 'plugin-cdn/lework-lenav-panel/1.0.0/public/plugins/lework-lenav-panel',
    module: 'plugin-cdn/lework-lenav-panel/1.0.0/public/plugins/lework-lenav-panel/module',
  },
  {
    id: 'fatcloud-windrose-panel',
    name: 'WindRose',
    info: {
      description: 'Make windrose plots',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/fatcloud-windrose-panel/0.7.1/public/plugins/fatcloud-windrose-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/fatcloud-windrose-panel/0.7.1/public/plugins/fatcloud-windrose-panel/img/logo.svg',
      },
      version: '0.7.1',
    },
    baseUrl: 'plugin-cdn/fatcloud-windrose-panel/0.7.1/public/plugins/fatcloud-windrose-panel',
    module: 'plugin-cdn/fatcloud-windrose-panel/0.7.1/public/plugins/fatcloud-windrose-panel/module',
  },
  {
    id: 'magnesium-wordcloud-panel',
    name: 'Word cloud',
    info: {
      description: 'WordCloud / TagCloud Panel',
      logos: {
        small:
          'https://plugin-cdn.storage.googleapis.com/magnesium-wordcloud-panel/1.2.4/public/plugins/magnesium-wordcloud-panel/img/logo.svg',
        large:
          'https://plugin-cdn.storage.googleapis.com/magnesium-wordcloud-panel/1.2.4/public/plugins/magnesium-wordcloud-panel/img/logo.svg',
      },
      version: '1.2.4',
    },
    baseUrl: 'plugin-cdn/magnesium-wordcloud-panel/1.2.4/public/plugins/magnesium-wordcloud-panel',
    module: 'plugin-cdn/magnesium-wordcloud-panel/1.2.4/public/plugins/magnesium-wordcloud-panel/module',
  },
];

export const remotePanels = dummyData.reduce((acc, item) => {
  // @ts-ignore YOLO!!!!!!
  acc[item.id] = {
    ...dummyPanel,
    ...item,
    info: {
      ...dummyPanel.info,
      ...item.info,
    },
  };
  return acc;
}, {});
