import React, { useState } from "react";
import styles from "./CommunityReports.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const CommunityReports = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    location: { lat: "", lng: "" },
  });

  const [reports, setReports] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.location.lat) {
      const newReport = { ...formData, status: "Pending" };
      setReports((prev) => [...prev, newReport]);
      setFormData({
        title: "",
        description: "",
        image: null,
        location: { lat: "", lng: "" },
      });
      alert("Report submitted successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Use a suitable marker icon
    iconSize: [30, 40],
  });

  return (
    <div className={styles.communityReports}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>Community Waste Reporting</h1>
        <p>Help us make a difference by reporting waste in your area!</p>
      </header>

      {/* Form Section */}
      <section className={styles.formSection}>
        <h2>Submit a Waste Report</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            required
          />
          <div className={styles.locationInput}>
            <input
              type="text"
              name="lat"
              value={formData.location.lat}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, lat: e.target.value },
                }))
              }
              placeholder="Latitude"
              required
            />
            <input
              type="text"
              name="lng"
              value={formData.location.lng}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, lng: e.target.value },
                }))
              }
              placeholder="Longitude"
              required
            />
          </div>
          <button type="submit">Submit Report</button>
        </form>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2>Reported Sites</h2>
        <MapContainer
          center={[20.5937, 78.9629]} // Default map center (India)
          zoom={5}
          className={styles.map}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {reports.map((report, index) => (
            <Marker
              key={index}
              position={[report.location.lat, report.location.lng]}
              icon={icon}
            >
              <Popup>
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <p>Status: {report.status}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </div>
  );
};

export default CommunityReports;
