import { useState } from 'react';
import './App.css';



const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    university: '',
    department: '',
    year: '',
    course: [],
    framework: '',
    startingDate: '',
    endingDate: '',
    cv: '',
  });

  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name:
          </label>
          <input
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}

          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo" className="form-label">
            Phone Number:
          </label>
          <input
            className="form-control"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="university" className="form-label">
            University Name:
          </label>
          <select
            className="form-select"
            name="university"
            value={formData.university}
            onChange={(e) => setFormData({ ...formData, university: e.target.value })}
          >
            <option value="1">Adama Science and Technology University</option>
            <option value="2">Addis Ababa Science and Technology University</option>
            <option value="3">Addis Ababa University</option>
            <option value="4">Adigrat University</option>
            <option value="5">Aksum University</option>
            <option value="6">Ambo University</option>
            <option value="7">Arba Minch University</option>
            <option value="8">Assosa University</option>
            <option value="9">Bahir Dar University</option>
            <option value="10">Bale Hora University</option>
          
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="department" className="form-label">
            Department:
          </label>
          <select
            className="form-select"
            name="department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          >
            <option value="1">Computer Science and Engineering</option>
            <option value="2">Computer Science</option>
            <option value="3">Software Engineering</option>
            <option value="4">IT</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="year" className="form-label">
            Year:
          </label>
          <select
            className="form-select"
            name="year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          >
            <option value="1">2nd Year</option>
            <option value="2">3rd Year</option>
            <option value="3">4th Year</option>
            <option value="4">Graduate</option>
          </select>
        </div>
        <div className='from-group'>
        <label htmlFor=" course" className="form-label">
            Area of Interest:
          </label>
          <select
            className="form-select"
            name="course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          >
            <option value="1">Software Solutions</option>
            <option value="2">Cyber Security</option>
            <option value="3">Infrastructure & Telecom Service(Networking)</option>
            <option value="4">E-Commerce & Fintech</option>
          </select>

        </div>
        <div className="form-group">
            <label htmlFor="framework" className="form-label">
              Preferred Frameworks and Languages
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="framework-react"
                name="framework"
                value="1"
                checked={formData.framework.includes('1')}
                
                onChange={(e) => setFormData({ ...formData, Framework: e.target.checked })}
              />
          <label className="form-check-label" htmlFor="framework-react">
            React
          </label>
    
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="framework-html"
      name="framework"
      value="2"
      checked={formData.framework.includes('2')}
      onChange={(e) => handleFrameworkChange(e.target.value, e.target.checked)}
    />
    <label className="form-check-label" htmlFor="framework-html">
      Java
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="framework-html"
      name="framework"
      value="2"
      checked={formData.framework.includes('2')}
      onChange={(e) => handleFrameworkChange(e.target.value, e.target.checked)}
    />
    <label className="form-check-label" htmlFor="framework-html">
      Angular
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="framework-html"
      name="framework"
      value="2"
      checked={formData.framework.includes('2')}
      onChange={(e) => handleFrameworkChange(e.target.value, e.target.checked)}
    />
    <label className="form-check-label" htmlFor="framework-html">
      
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="framework-html"
      name="framework"
      value="2"
      checked={formData.framework.includes('2')}
      onChange={(e) => handleFrameworkChange(e.target.value, e.target.checked)}
    />
    <label className="form-check-label" htmlFor="framework-html">
      HTML
    </label>
  </div>
  
</div>
        <div className="form-group">
          <label htmlFor="startingDate" className="form-label">
            Starting Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="startingDate"
            name="startingDate"
            value={formData.startingDate}
            onChange={(e) => setFormData({ ...formData, startingDate: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endingDate" className="form-label">
            Ending Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="endingDate"
            name="endingDate"
            value={formData.endingDate}
            onChange={(e) => setFormData({ ...formData, endingDate: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cv" className="form-label">
            Upload CV:
          </label>
          <input
            type="file"
            className="form-control-file"
            id="cv"
            name="cv"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <div className="form-group">
          <button className='btn' type='button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;