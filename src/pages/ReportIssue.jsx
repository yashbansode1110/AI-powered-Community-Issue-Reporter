import { useState } from 'react';
import api from '../api/axios';
import Map from '../components/Map';

function ReportIssue() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('location', JSON.stringify({ latitude: latitude ?? 0, longitude: longitude ?? 0 }));
      if (image) {
        formData.append('image', image);
      }

      const { data } = await api.post('/issues', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (data.success) {
        setTitle('');
        setDescription('');
        setCategory('');
        setImage(null);
        setLatitude(null);
        setLongitude(null);
        window.location.href = '/';
      } else {
        setError(data.message || 'Failed to report issue');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to report issue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page page--wide">
      <div className="form-card">
        <form className="report-form" onSubmit={handleSubmit}>
          <h1 className="form-title">Report Issue</h1>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="field">
            <label className="field__label" htmlFor="title">Title</label>
            <input
              id="title"
              className="input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="description">Description</label>
            <textarea
              id="description"
              className="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="category">Category</label>
            <input
              id="category"
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Pothole, Lighting, Graffiti"
              required
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="image">Image</label>
            <div className="file-wrap">
              <input
                id="image"
                className="input input--file"
                type="file"
                accept="image/jpeg,image/png,image/gif,image/webp"
                onChange={(e) => setImage(e.target.files[0] || null)}
              />
              <label htmlFor="image" className={`file-label ${image ? 'has-file' : ''}`}>
                {image ? image.name : 'Choose image (optional)'}
              </label>
            </div>
          </div>
          <div className="field map-section">
            <span className="field__label">Pick location on map</span>
            <div className="map-wrap">
              <Map onLocationSelect={(lat, lng) => { setLatitude(lat); setLongitude(lng); }} />
            </div>
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Submitting...' : 'Report Issue'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportIssue;
