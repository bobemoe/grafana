import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';

import { GrafanaTheme2 } from '@grafana/data/src';
import { getDataSourceSrv } from '@grafana/runtime/src';
import { Icon } from '@grafana/ui';
import { Badge, IconButton, useStyles2 } from '@grafana/ui/src';

import { getSavedQuerySrv } from '../api/SavedQueriesSrv';
import { QueryItem } from '../types';

type QueryListItemProps = {
  query: QueryItem;
};

export const QueryListItem = ({ query }: QueryListItemProps) => {
  const styles = useStyles2(getStyles);
  const [dsInfo, setDsInfo] = useState<any>();

  // @TODO update with real data
  const authors = ['Drew Slobodnjak', 'Nathan Marrs', 'Artur Wierzbicki', 'Raphael Batyrbaev', 'Adela Almasan'];
  const author = authors[Math.floor(Math.random() * authors.length)];

  const dates = [
    'August 13, 2022, 4:10pm',
    'August 13, 2022, 2:32pm',
    'August 14, 2022, 1:00am',
    'August 16, 2022, 12:00pm',
    'August 17, 2022, 2:33pm',
  ];
  const date = dates[Math.floor(Math.random() * dates.length)];

  useEffect(() => {
    const getQueryDsInstance = async () => {
      const ds = await getDataSourceSrv().get(query.ds_uid[0]);
      setDsInfo(ds);
    };

    getQueryDsInstance();
  }, [query.ds_uid]);

  const openDrawer = () => {
    console.log('open drawer');
  };

  const deleteQuery = async () => {
    await getSavedQuerySrv().deleteSavedQuery({ uid: query.uid });
  };

  const getDsType = () => {
    const dsType = dsInfo?.type ?? 'datasource';
    return dsType.charAt(0).toUpperCase() + dsType.slice(1);
  };

  return (
    <tr key={query.uid} className={styles.row} onClick={openDrawer}>
      <td>
        <Icon name={'lock'} />
      </td>
      <td className={styles.row}>
        <Badge color={'green'} text={'1'} icon={'link'} />
      </td>
      <td className={styles.rowData}>{query.title}</td>
      <td className={styles.rowData}>{getDsType()}</td>
      <td className={styles.rowData}>
        <img
          className="filter-table__avatar"
          src={'/avatar/46d229b033af06a191ff2267bca9ae56'}
          alt={`Avatar for ${author}`}
          style={{ width: '16px', height: '16px' }}
        />{' '}
        &nbsp;{author}
      </td>
      <td className={styles.rowData}>{date}</td>
      <td className={styles.tableTr}>
        <IconButton name="share-alt" className={styles.iconButtons} tooltip={'Share'} />
        <IconButton name="copy" className={styles.iconButtons} tooltip={'Copy'} />
        <IconButton name="upload" className={styles.iconButtons} tooltip={'Upload'} />
        <IconButton name="cog" className={styles.iconButtons} tooltip={'Settings'} />
        <IconButton name="trash-alt" tooltip={'Delete'} onClick={deleteQuery} />
      </td>
    </tr>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  return {
    row: css`
      height: 70px;
    `,
    rowData: css``,
    iconButtons: css`
      // margin-right: 25px;
    `,
    tableTr: css`
      display: flex;
      justify-content: space-between;
      margin-top: 22px;
    `,
  };
};