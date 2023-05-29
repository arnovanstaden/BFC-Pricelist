import ManageTreatment from '../../components/ManageTreatment';

interface IProps {
  params: {
    id: string;
  }
}

const EditPage = ({ params }: IProps): Promise<JSX.Element | null> => <ManageTreatment id={params.id} />;

export default EditPage;
