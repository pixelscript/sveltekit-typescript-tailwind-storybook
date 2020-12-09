import '../../css/utils.css';

import { storiesOf } from '@storybook/svelte';
import Counter from '../../../src/components/Counter.svelte';
import markdownNotes from './counter.stories.md';

storiesOf('Counter | Counter', module)
    //Simple Button
    .add(
        'Counter',
        () => ({
            Component: Counter
        }),
        { notes: { markdown: markdownNotes } },
    )
