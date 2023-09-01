// I'll put reusable types here

export type PostPageProps = {
    url: string;
    frontmatter: {
        tags: string[];
        title: string;
    };
};