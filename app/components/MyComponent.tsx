import type {
  ComponentLoaderArgs,
  HydrogenComponentProps,
  HydrogenComponentSchema,
} from '@weaverse/hydrogen';
import {forwardRef} from 'react';

type MyComponentData = {
  heading: string;
  // More type definitions...
};

type MyComponentProps = HydrogenComponentProps<
  Awaited<ReturnType<typeof loader>>
> &
  MyComponentData;

let MyComponent = forwardRef<HTMLElement, MyComponentProps>((props, ref) => {
  let {heading, loaderData, ...rest} = props;
  // More component logic...

  return (
    <section ref={ref} {...rest}>
      titolo : {heading}
      {/*    Component markup...    */}
    </section>
  );
});

export let loader = async (args: ComponentLoaderArgs<MyComponentData>) => {
  // Data fetching logic, the code will be run on the server-side ...
};

export let schema: HydrogenComponentSchema = {
  type: 'unique-type-string',
  title: 'My Component',
  inspector: [
    {
      group: 'Hero',
      inputs: [
        {
          type: 'text',
          label: 'Heading',
          name: 'heading',
          defaultValue: 'Testimonials',
          placeholder: 'Enter section heading',
        },
        // More input settings...
      ],
    },
  ],

  toolbar: ['general-settings', ['duplicate', 'delete']],
};

export default MyComponent;
