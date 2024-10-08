import { TableColumn } from 'react-data-table-component';
import SkillTableObject from '../interfaces/skillTableObject.ts';
import DeleteItem from '../../../components/Table/DeleteButton.tsx';
import EditItem from '../../../components/Table/EditItem.tsx';
import TableActions from '../../../components/Table/TableActions.tsx';
import Avatar from '../../../components/Avatar.tsx';

const generateActions = (row: SkillTableObject, props) => {
  const { handleDelete, routeParser } = props;
  const actions = [
    <EditItem href={routeParser(row)} key={0} />,
    <DeleteItem handleDelete={() => handleDelete(row._id)} key={1} />,
  ];

  return <TableActions actions={actions} />;
};

const getColumns = (props): TableColumn<SkillTableObject>[] => {
  return [
    {
      sortable: true,
      name: 'ID',
      selector: (row) => row._id,
    },
    {
      sortable: true,
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      sortable: true,
      name: 'Image',
      cell: (row) => <Avatar src={row.image} />,
    },
    {
      name: 'Actions',
      cell: (row) => generateActions(row, props),
    },
  ];
};

export default getColumns;
