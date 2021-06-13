import { Meta, Story } from '@storybook/react';

import { Table } from './Table';

const meta: Meta = {
  title: 'Elements/Table',
  component: Table,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type User = {
  id: string;
  name: string;
  title: string;
  role: string;
  email: string;
};

const data: User[] = [
  {
    id: '1',
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'jane.cooper@example.com',
  },
  {
    id: '2',
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    role: 'Owner',
    email: 'cody.fisher@example.com',
  },
];

const Template: Story = (props) => (
  <Table<User>
    data={data}
    columns={[
      {
        title: 'Name',
        field: 'name',
      },
      {
        title: 'Title',
        field: 'title',
      },
      {
        title: 'Role',
        field: 'role',
      },
      {
        title: 'Email',
        field: 'email',
      },
    ]}
    {...props}
  />
);

export const Default = Template.bind({});
Default.args = {};
