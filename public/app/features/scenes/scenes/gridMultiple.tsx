import { VizPanel } from '../components';
import { Scene } from '../components/Scene';
import { SceneTimePicker } from '../components/SceneTimePicker';
import { SceneFlexLayout } from '../components/layout/SceneFlexLayout';
import { SceneGridLayout } from '../components/layout/SceneGridLayout';
import { SceneTimeRange } from '../core/SceneTimeRange';
import { SceneEditManager } from '../editor/SceneEditManager';

import { getQueryRunnerWithRandomWalkQuery } from './queries';

export function getMultipleGridLayoutTest(): Scene {
  const scene = new Scene({
    title: 'Multiple grid layouts test',
    body: new SceneFlexLayout({
      children: [
        new SceneGridLayout({
          children: [
            new VizPanel({
              layout: {
                x: 0,
                y: 0,
                width: 12,
                height: 10,
              },
              isDraggable: true,
              isResizable: true,
              pluginId: 'timeseries',
              title: 'Dragabble and resizable',
            }),
            new VizPanel({
              isResizable: false,
              isDraggable: true,
              layout: { x: 12, y: 0, width: 12, height: 10 },
              pluginId: 'timeseries',
              title: 'Draggable only',
            }),
            new SceneFlexLayout({
              layout: { x: 6, y: 11, width: 12, height: 10 },
              direction: 'column',
              children: [
                new VizPanel({
                  layout: { ySizing: 'fill' },
                  pluginId: 'timeseries',
                  title: 'Fill height',
                }),
                new VizPanel({
                  layout: { ySizing: 'fill' },
                  pluginId: 'timeseries',
                  title: 'Fill height',
                }),
              ],
            }),
          ],
        }),

        new SceneGridLayout({
          children: [
            new VizPanel({
              layout: {
                x: 0,
                y: 0,
                width: 12,
                height: 10,
              },
              isDraggable: true,
              pluginId: 'timeseries',
              title: 'Fill height',
            }),
            new VizPanel({
              isResizable: false,
              isDraggable: true,
              layout: { x: 12, y: 0, width: 12, height: 10 },
              pluginId: 'timeseries',
              title: 'Fill height',
            }),
            new SceneFlexLayout({
              layout: { x: 6, y: 11, width: 12, height: 10 },
              direction: 'column',
              children: [
                new VizPanel({
                  layout: { ySizing: 'fill' },
                  isDraggable: true,
                  pluginId: 'timeseries',
                  title: 'Fill height',
                }),
                new VizPanel({
                  isDraggable: true,
                  layout: { ySizing: 'fill' },
                  pluginId: 'timeseries',
                  title: 'Fill height',
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    $editor: new SceneEditManager({}),
    $timeRange: new SceneTimeRange(),
    $data: getQueryRunnerWithRandomWalkQuery(),
    actions: [new SceneTimePicker({})],
  });

  return scene;
}