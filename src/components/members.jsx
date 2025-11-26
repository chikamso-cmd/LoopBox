import "../styles/members.css";
import profile from '../assets/user_1.png'

function Members() {
  return (
    <div className="members">
      <figure>
              <h1>members</h1>
              <p>view all</p>
          </figure>
          <div className="members-list">
              <div className="members-profile">
                  <div className="profile-info">
                      <img src={profile} alt="user-profile-image" />
                      <h3>christian albert</h3>
                  </div>
                  <p>$10,000</p>
              </div>
              <hr />
              <div className="members-profile">
                  <div className="profile-info">
                      <img src={profile} alt="user-profile-image" />
                      <h3>christian albert</h3>
                  </div>
                  <p>$10,000</p>
              </div>
              <hr />
              <div className="members-profile">
                  <div className="profile-info">
                      <img src={profile} alt="user-profile-image" />
                      <h3>christian albert</h3>
                  </div>
                  <p>$10,000</p>
              </div>
              <hr />
              <div className="members-profile">
                  <div className="profile-info">
                      <img src={profile} alt="user-profile-image" />
                      <h3>christian albert</h3>
                  </div>
                  <p>$10,000</p>
              </div>
              <hr />
              <div className="members-profile">
                  <div className="profile-info">
                      <img src={profile} alt="user-profile-image" />
                      <h3>christian albert</h3>
                  </div>
                  <p>$10,000</p>
              </div>
              <hr />
              <div className="members-profile">
                  <div className="profile-info">
                      <img src={profile} alt="user-profile-image" />
                      <h3>christian albert</h3>
                  </div>
                  <p>$10,000</p>
              </div>
              <hr />
              <div className="members-profile">
                  <div className="profile-info">
                      <img src={profile} alt="user-profile-image" />
                      <h3>christian albert</h3>
                  </div>
                  <p>$10,000</p>
              </div>
             
          </div>
    </div>
  );
}
export default Members;
