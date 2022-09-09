import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider , QueryClient} from 'react-query';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const client = new QueryClient();
root.render(
<QueryClientProvider client={client}>

<App />
</QueryClientProvider>
);


