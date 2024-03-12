
import UpdateEventForm from "@/components/UpdateEventForm";
import IssuerPageHeader from "@/partials/IssuerPageHeader";



interface ViewRequestProps {
    params: {
      id: string; 
    };
  }
  
  const ViewRequest: React.FC<ViewRequestProps> = ({ params }) => {
    const { id } = params;

    return (
        <>

            <IssuerPageHeader title={""} />
            <section className="section-sm">
                <div className="container">
                    <div className="row px-4">
                        <UpdateEventForm id={id}/>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewRequest;
