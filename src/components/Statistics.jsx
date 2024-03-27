import { CardComponent } from "./Cards"

export const AdvancedStatistics = () => {
    return(
        <div className="px-2">
            <div className="container">
                <div className="text-center px-3 py-4 mb-5">
                    <h3 className="mb-4 fw-700">Advanced Statistics</h3>
                    <p className="line-height fs-6 fc-grayish-violet fw-500 mx-auto details-narrow mb-lg-2">Track how your links are performing across the web with our advanced statistics dashboard</p>
                </div>
                <CardComponent />
            </div>
        </div>
    )
}