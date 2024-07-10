export default function (plop) {
  plop.setGenerator('component', {
    description: 'Cria um novo componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'plop-templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Component.stories.tsx.hbs',
      },
    ],
  });
}
