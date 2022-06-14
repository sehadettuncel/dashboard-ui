import './App.css';

import logo from "./assets/logo.svg";
import dashboard from "./assets/Dashboard.svg";
import leaderboard from "./assets/leaderboard.svg";
import viewList from "./assets/view-list.svg";
import moneyBillStack from "./assets/money-bill-stack.svg";
import comment from "./assets/comment.svg";
import phone from "./assets/phone.svg";
import message from "./assets/message.svg";
import notification from "./assets/notification.svg";
import profil from "./assets/profil.jpeg";
import orange from "./assets/orange.svg";
import darkBlue from "./assets/dark-blue.svg";
import next from "./assets/next.svg";
import totalNet from "./assets/total-net.svg";
import totalEarn from "./assets/total-earn.svg";
import harvested from "./assets/harvested.svg";
import allGoals from "./assets/all-goals.svg";
import more from "./assets/more.svg";
import gpu from "./assets/gpu.svg";
import cpu from "./assets/cpu.svg";
import est from "./assets/est.svg";
import goals from "./assets/goals.svg";
import right from "./assets/right.svg";
import plan from "./assets/plan.svg";
import settings from "./assets/settings.svg";
import income from "./assets/income.svg";
import trans from "./assets/trans.svg";
import incomeList from "./assets/income-list.svg";




function App() {
  return (
    <div className="container">
      <div className='sidebar'>

        <div className='top'>
          <div className='logo'>
            <img src={logo} className="img" />
            <div className='gnd'>GND CRYPT</div>
          </div>
        </div>
        <div className='menu'>
          <div className='dashboard list' >
          <a href="">  <img src={dashboard} alt="" className='distance' />
            <div className='title'>Dashboard</div></a>
          </div>
          <div className='dashboard list' >
            <a href=""><img src={leaderboard} alt="" className='distance' />
            <div className='title'>Shot Performance</div></a>
          </div>
          <div className='dashboard list' >
            <a href=""><img src={viewList} alt="" className='distance' />
            <div className='title'>Followers</div></a>
          </div>
          <div className='dashboard list' >
            <a href=""><img src={moneyBillStack} alt="" className='distance' />
            <div className='title'>Administration</div></a>
          </div>
          <div className='bottom'>
            <div className='teams'>TEAMS</div>
            <div className='teams-menu list' >
             <a href=""> <img src={comment} alt="" className='distance' />
              <div className='title'>Message</div></a>
            </div>

            <div className='teams-menu list' >
              <a href=""><img src={phone} alt="" className='distance' />
              <div className='title'>Support</div></a>
            </div>


          </div>
        </div>



      </div>

      <div className="content">

        <div className='header'>
          <div className='left-header'>
            <ul>
              <li><a href="">Market</a></li>
              <li><a href="">Exchange</a></li>
              <li><a href="">Wallet</a></li>
              <li><a href="">Social</a></li>
              <li><a href="">My History</a></li>
            </ul>
          </div>

          <div className='right-header'>
            <div className="icons">
              <img src={message} alt="" />
            </div>
            <div className="icons">
              <img src={notification} alt="" />
            </div>
            <div className="icons size ">
              <img className='profil' src={profil} alt="" />
            </div>


          </div>
        </div>

        <aside>
          <div className="top-content">
            <div className="wallet">
              <div className='title'>Wallet Summary
                <div>
                  <img src={next} alt="" />
                </div>
              </div>
              <div className="in-out-come ">
                <div className='out-come'>
                  <div className="photo">
                    <img src={orange} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">
                      Outcome
                    </div>
                    <div className="price">
                      $460.00
                    </div>
                  </div>
                </div>
                <div className="out-come">
                  <div className="photo">
                    <img src={darkBlue} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">
                      Income
                    </div>
                    <div className="price">
                      $840.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="total">
                <div className="total-net distance">
                  <div className="photo">
                    <img src={totalNet} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">
                      Total net worth
                    </div>
                    <div className="price">
                      $5,250.90
                    </div>
                  </div>
                </div>
                <div className="total-net">
                  <div className="photo">
                    <img src={totalEarn} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">
                      Total earnings
                    </div>
                    <div className="price">
                      $10,596.80
                    </div>
                  </div>
                </div>

              </div>
              <div className='total'>

                <div className="total-net distance">
                  <div className="photo">
                    <img src={harvested} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">
                      harvested losses
                    </div>
                    <div className="price">
                      $0.00
                    </div>
                  </div>
                </div>
                <div className='total'>
                  <div className="total-net">
                    <div className="photo">
                      <img src={allGoals} alt="" />
                    </div>
                    <div className="info">
                      <div className="text">
                        Total for all goals
                      </div>
                      <div className="price">
                        $5,596.80
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-wallet">
              <div className='title'>My Wallets <img src={more} alt="" /></div>
              <div className='blocks'>
                <div className='block-1'>
                  <div className='text'>BTC</div>
                  <div className='bottom-value'>
                    <div className='value'>69</div>
                    <div className='yuzde'>%</div>
                  </div>
                </div>

                <div className='block-1'>
                  <div className='text'>LTC</div>
                  <div className='bottom-value'>
                    <div className='value'>82</div>
                    <div className='yuzde'>%</div>
                  </div>
                </div>

                <div className='block-1' style={{ backgroundColor: "#4F46BA", boxShadow: "0px 50.7352px 78.5187px rgba(20, 34, 244, 0.14), 0px 32.8839px 45.9844px rgba(20, 34, 244, 0.106296), 0px 19.5424px 25.0097px rgba(20, 34, 244, 0.085037), 0px 10.147px 12.7593px rgba(20, 34, 244, 0.07), 0px 4.13398px 6.39782px rgba(20, 34, 244, 0.054963), 0px 0.939541px 3.08986px rgba(20, 34, 244, 0.0337037)" }}>
                  <div className='text' style={{ color: "#fff" }}>XRP</div>
                  <div className='bottom-value'>
                    <div className='value' style={{ color: "#fff" }}>99</div>
                    <div className='yuzde' style={{ color: "#fff" }}>%</div>
                  </div>
                </div>

                <div className='block-1'>
                  <div className='text'>BLT</div>
                  <div className='bottom-value'>
                    <div className='value'>69</div>
                    <div className='yuzde'>%</div>
                  </div>
                </div>

                <div className='block-1' style={{ border: "1px dashed grey", backgroundColor: "var(--color-background)" }}>
                  <div className='text'>+ ADD NEW </div>
                  <div className='bottom-value'>
                    <div className='value' style={{ color: "grey", fontSize: 12 }}>Wal</div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="bottom-content">
            <div className='status'>
              <div className='title distance'>Mining Status</div>
              <div className="gpu sub-distance">
               <div className='row'>
               <div className='img'><img src={gpu} alt="" /></div>
                <div className="column">
                  <div className="sub-title line-space">GPUs mining</div>
                  <div className="running">Running..</div>
                </div>
               </div>
                <div className="on">
                  <div className='arka'> <div className='circle'></div></div>

                </div>
              </div>
              <div className="gpu sub-distance">
               <div className='row'>
               <div className='img' style={{ backgroundColor: "#FE8F66" }}><img src={cpu} alt="" /></div>
                <div className="column">
                  <div className="sub-title line-space">CPUs mining</div>
                  <div className="running">Running..</div>
                </div>
               </div>
                <div className="on">
                  <div className='arka'> <div className='circle'></div></div>

                </div>
              </div>
              <div className="gpu">
               <div className='row'>
               <div className='img' style={{ background: "#783EFD" }} ><img src={est} alt="" /></div>
                <div className="column">
                  <div className="sub-title line-space">Est. daily USD</div>
                  <div style={{ color: "#8A8A8C", fontWeight: "500", fontSize: "11.8" }}>$125.03</div>
                </div>
               </div>
                <div className="on">


                </div>
              </div>
            </div>
            <div className='status'>
              <div className='title distance'>Personal</div>
              <div className="cpu sub-distance">
                <div className='row'>
                <div className='img' style={{ background: "#FFF0E6" }}><img src={goals} alt="" /></div>
                <div className="sub-title line-space">Goals</div>
                </div>
                  <div className="background">
                     <img src={right} alt="" />
                  </div>
               </div>
               <div className="cpu sub-distance">
                <div className='row'>
                <div className='img' style={{ background: "#ECEAFE" }}><img src={plan} alt="" /></div>
                <div className="sub-title line-space">Monthly Plan</div>
                </div>
                  <div className="background">
                     <img src={right} alt="" />
                  </div>
               </div>
               <div className="cpu">
                <div className='row'>
                <div className='img' style={{ background: "#E5F7FF" }}><img src={settings} alt="" /></div>
                <div className="sub-title line-space">Settings</div>
                </div>
                  <div className="background">
                     <img src={right} alt="" />
                  </div>
               </div>
                </div>
            <div className='status-3'>
              <div className='title distance'>Latest Transation</div>
             <div className='cont'>
             <div className='row'>
                <div className='img' ><img src={income} alt="" /></div>
                <div className="column">
                <div className='sub-title'>Income: Salary Oct</div>
                <div className="sub-sub-title">Successfully</div>
                </div>
              </div>
              <div className="price">$1200</div>
             </div>
             <br></br>
             <div className='cont'>
             <div className='row'>
                <div className='img' style={{background:"#0890FE"}}><img src={trans} alt="" /></div>
                <div className="column">
                <div className='sub-title'>Electric Bill</div>
                <div className="sub-sub-title">Successfully</div>
                </div>
              </div>
              <div className="price" style={{color:"#FF4267"}}>-$480</div>
             </div>
             <br />
             <div className='cont'>
             <div className='row'>
                <div className='img' style={{background:"#FFAF2A"}}><img src={incomeList} alt="" /></div>
                <div className="column">
                <div className='sub-title'>Income: Jane transfers</div>
                
                </div>
              </div>
              <div className="price">$500</div>
             </div>
             <br />
             
             <div className='cont'>
             <div className='row'>
                <div className='img' style={{background:"#0890FE"}}><img src={trans} alt="" /></div>
                <div className="column">
                <div className='sub-title'>Electric Bill</div>
                <div className="sub-sub-title">Successfully</div>
                </div>
              </div>
              <div className="price" style={{color:"#FF4267"}}>-$480</div>
             </div>
            </div>
          </div>
        </aside>





      </div>


    </div>
  );
}

export default App;
