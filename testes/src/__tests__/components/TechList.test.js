import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('TechList component', () => {
    it('should be able to add new tech', () => {
        const { getByText, getByTestId, getByLabelText, debug } = render(<TechList />);

        fireEvent.change(getByLabelText('Tech'), { target: {value: 'NodeJS'} });
        fireEvent.submit(getByTestId('tech-form'));

        expect(getByTestId('tech-list')).toContainElement(getByText('NodeJS'));
        expect(getByLabelText('Tech')).toHaveValue('');
    });
});