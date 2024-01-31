import { useOutletContext, Link } from 'react-router-dom';

function Home() {
  const products = useOutletContext();

  return (
    <div className='flex flex-col p-8 max-w-5xl self-center'>
      <div className='grid sm:grid-cols-2 gap-10 '>
        <div className='flex flex-col gap-5 w-full self-center justify-self-center max-w-xs mb-4'>
          <img src={products[11].image} alt='' className='' />
          <button className='border-2 border-slate-600 w-fit p-1 self-center hover:bg-slate-600 hover:text-white'>
            Buy <Link to={'shop/product/12'}><b>Now!</b></Link>
          </button>
        </div>
        <div className='flex flex-col justify-center mb-4'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nisl nec
            dictum vehicula, sapien metus convallis nisi, in tristique velit nulla tempor tortor. Ut
            vitae orci id purus efficitur viverra quis ut purus. Ut posuere vel augue a aliquet.
            Integer at erat lobortis, bibendum ex vitae, volutpat eros. Suspendisse euismod placerat
            nisi quis maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Mauris volutpat pharetra malesuada. Cras non nisl imperdiet,
            posuere nunc quis, lobortis dui. Fusce mollis bibendum libero in ultrices. Nulla
            vulputate ullamcorper diam eget eleifend. Nulla id vehicula quam. Suspendisse dui justo,
            aliquam finibus lacinia eu, porta eget turpis. Quisque condimentum tempor cursus. Nulla
            nunc massa, porta a venenatis in, ornare at arcu. Nam pharetra, dolor id suscipit
            semper, nisl tellus lacinia ligula, et sollicitudin nibh lorem eget metus. Donec in
            aliquam tellus.
          </p>
        </div>
      </div>
      <hr className='border-1 border-slate-400 w-11/12 self-center mb-5 mt-5' />
      <div className='flex flex-col justify-center mb-4'>
        <h2 className='self-center mb-5 text-xl'>
          <b>World-class</b> products
        </h2>
        <p>
          Quisque imperdiet nisl malesuada orci sodales cursus. Nunc laoreet vestibulum risus, quis
          rhoncus risus efficitur semper. Proin dapibus massa quam, a gravida urna lobortis a.
          Integer faucibus diam eget urna pharetra aliquet. Duis cursus dui sit amet massa dapibus,
          sagittis iaculis libero semper. Vivamus ac accumsan sapien, nec condimentum erat. Praesent
          placerat vitae nulla in pellentesque. Proin et urna vel libero sodales pulvinar a nec
          metus. Praesent eget odio non eros fringilla tempor quis at diam. Quisque vestibulum
          hendrerit elit, quis sagittis leo tempor pellentesque. Nulla mauris ligula, malesuada ac
          lobortis non, finibus eget quam. Nam enim mauris, commodo vitae iaculis et, ultricies ac
          urna. Pellentesque eget quam in urna consectetur sollicitudin et blandit urna. Suspendisse
          malesuada dignissim consequat. In semper libero vel rhoncus maximus. Cras diam arcu,
          ultricies et cursus at, imperdiet nec leo. Praesent tempor magna ante. Integer elementum
          pretium enim, ornare tempor nisi ullamcorper eu. Praesent convallis porta felis at
          egestas. Fusce at sodales nibh. Fusce dignissim, risus a laoreet sodales, orci justo
          rhoncus sapien, quis sollicitudin nibh eros sed purus. Integer lobortis feugiat sem.
          Aenean vitae lobortis dolor, sed molestie elit. Proin ac elit neque. Suspendisse ac dui
          sed diam feugiat sagittis. Phasellus maximus porttitor nunc sed hendrerit. Vestibulum
          convallis, magna at egestas condimentum, dui ex dignissim leo, non lobortis libero elit
          mattis ante. Cras semper ut mi non pellentesque. Sed dignissim laoreet orci ut laoreet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum ullamcorper
          libero, eu laoreet ligula iaculis sit amet. Proin euismod malesuada nisi, et convallis
          mauris faucibus et. Cras laoreet risus velit, eu sollicitudin est pharetra dapibus. Proin
          justo odio, finibus id quam eu, rutrum sagittis massa. Donec eu turpis massa. Proin in est
          eu enim semper cursus in eget dui. Aliquam tempor, dolor venenatis facilisis feugiat,
          justo ante dapibus nunc, a hendrerit urna mi in ex. Etiam eget molestie diam, eu auctor
          leo. Suspendisse id odio quis est tincidunt vulputate et ac ligula. Fusce non est
          malesuada, egestas mi id, tristique erat. Ut pulvinar condimentum dui a congue. In hac
          habitasse platea dictumst. Ut ac varius ex. Integer efficitur eu ligula sit amet pretium.
          Nam eget sem convallis, eleifend erat vel, dapibus diam. Sed ullamcorper ac elit consequat
          pretium. Sed placerat suscipit nunc in sodales. Etiam interdum dapibus dui eu tincidunt.
          Phasellus enim mauris, pellentesque et diam non, maximus auctor eros. In risus tellus,
          consectetur eu porta quis, elementum sed justo.
        </p>
      </div>
    </div>
  );
}

export default Home;
