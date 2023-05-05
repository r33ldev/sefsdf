import React from 'react'
import Text from '../atoms/text';
import { Grid } from '../atoms/grid';
import Flex from '../atoms/flex';

interface relatedArticleProps {

}

export const RelatedArticle: React.FC<relatedArticleProps> = ({ }) => {
    let related = [
        {
            title: 'How to retrieve your password',
            excerpt: 'Recovering your password is a pretty straightforward process...',
            tags: ['password', 'account', 'recovery']
        }
    ]
    related = Array(3).fill(related[0])
    return (
        <div style={{width: '80%'}}>
            <Text type='p' text='Related Article' size='2.2rem' weight={600} styles={{paddingBottom:'2rem'}} />
            <Grid columns='repeat(auto-fit, minmax(20rem, 1fr))' >
                {related.map((item, index) => (
                    <Flex key={index} padding='2rem' border='1px solid #DEDEE3' borderRadius='5px' direction='column' width='fit-content' >
                        <Text type='p' text={item.title} size='1.6rem' weight={600} />
                        <Text type='p' text={item.excerpt} size='1.5rem' styles={{padding: '1rem 0 3rem'}} />
                        <Text type='p' text={`Tags: ${item.tags.join(', ')}`} size='1.6rem' />
                    </Flex>
                ))}
            </Grid>
        </div>
    );
}
export default RelatedArticle