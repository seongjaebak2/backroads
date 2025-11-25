import { services } from "../data";
import Titile from "./Titile";

export default function Services() {
  return (
    <section className="section services" id="services">
      <Titile title="our" subtitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article className="service" key={service.id}>
              <span className="service-icon">
                <i className={service.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
