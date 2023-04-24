import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator component', () => {
   test('page count test', () => {
      const component = create(<Paginator totalCount={200} pageSize={10} paginationSize={10} />);
      const instance = component.root;
      const spans = instance.findAllByType('span');
      expect(spans.length).toBe(10);
   });
   test('if pages count is more then 10 button NEXT should be present', () => {
      const component = create(<Paginator totalCount={200} pageSize={10} paginationSize={10} />);
      const instance = component.root;
      let buttons = instance.findAllByType('button');
      expect(buttons.length).toBe(1);
   });
});