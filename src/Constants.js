const prod = {
    url: {
        PUBLIC_URL: 'https://nickjoven.github.io/blog/'
    }
}

const dev = {
    url: {
        PUBLIC_URL: 'http://localhost:3000/blog/'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod