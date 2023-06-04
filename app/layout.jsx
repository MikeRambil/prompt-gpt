import '@styles/globals.css';

// // import Nav from '@components/Nav';
// // import Provider from '@components/Provider';

export const metadata = {
  title: 'Prompt-GPT',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
// const RootLayout = ({ children }) => (
//   <html lang='en'>
//     <body>
//       {/* <Provider> */}
//       <div className='main'>
//         <div className='gradient' />
//       </div>

//       <main className='app'>
//         {/* <Nav /> */}
//         {children}
//       </main>
//       {/* </Provider>*/}
//     </body>
//   </html>
// );
