import {NextPage} from 'next';
import {client} from '../ApolloClient';
import {gql} from '@apollo/client';



const RecipesPage: NextPage = ({recipes}) => {
  return (<div><p>Recipes overview</p></div>);
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
        query Recipes {
          recipes {
            title
            description
            ingredients
          }
        }
      `,
  });

  return {
    props: {
      recipes: data.recipes,
    },
  };
}

export default RecipesPage;