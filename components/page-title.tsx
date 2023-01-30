
function PageTitle(props: any) {
  return (
    <div>
    <h2 className="has-text-centered is-size-1 has-text-weight-bold">
      {props.children}
    </h2>
    </div>
  );
}

export default PageTitle;
