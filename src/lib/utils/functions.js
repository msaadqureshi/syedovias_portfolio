import axios from 'axios';

const getInstagramFeed = async (username) => {
  try {
    const response = await axios.get(
      // 'https://syedovais.netlify.app/https://www.instagram.com/ssovais/?__a=1'
      'https://www.instagram.com/ssovais/media/'
      // `https://www.instagram.com/${username}/?igsh=cHQ4M2k5ZzB3Z25l`
      // `https://www.instagram.com/${username}/?__a=1&__d=dis`
    );
    const user = response.data.graphql.user;
    console.log('>>>>>>', JSON.stringify(response));
    const feed = user.edge_owner_to_timeline_media.edges.map((edge) => {
      const { node } = edge;
      return {
        id: node.id,
        shortcode: node.shortcode,
        imageUrl: node.display_url,
        caption: node.edge_media_to_caption.edges[0]?.node?.text || '',
        likes: node.edge_media_preview_like.count,
        comments: node.edge_media_to_comment.count,
        timestamp: node.taken_at_timestamp,
      };
    });
    return feed;
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    return [];
  }
};

export { getInstagramFeed };
