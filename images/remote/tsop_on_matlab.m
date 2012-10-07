x=[1 0 0 1 0 1 0 0 1 0 1 0 1 1 1 0 0 0 1 0 1 0 1 0 1 0 1 1];

modsig=modulate(x,36000,80000,'pwm');       % PWM modulation of the input signal

t=(0:1/61:1)
noise=sin(2*pi*12000*t);                    % Noise signal generation

noiseadded=modsig+noise;                    % Adding the noise signal


poles(101)=1;
for j=1:1:101
    poles(j)=1;
end
%PLEASE READ Using tsop_on_matlab.m.docx FILE TO AVOID ERROR ON THE
%VARIABLE 'num'.
nonoise=filter(num,poles,noiseadded);           % Filtering the Noisy Signal
check=filter(num,poles,modsig);                 % Filtering the simple modulated signal

z1=demod(modsig,36000,80000,'pwm');         % Demodulation of the Simple modulated Signal  z1=simple output


zz=z1;
inputlength=length(zz);
for i=1:1:inputlength
    if (zz(i)>0)
            zz(i)=1;
    end
end
zzz=nonoise
inputlength1=length(nonoise)
z2=z1

for i=1:1:inputlength1
    if (zzz(i)>0)
            zzz(i)=1;
    elseif (zzz(i)<0)
        zzz(i)=0;
    end
end
z=demod(zzz,36000,80000,'pwm');
dm=z;


for m=1:1:length(z)-1
    dm(m)=z(m+1);
end




subplot(2,4,1), plot(x); title('Original Signal');
subplot(2,4,2), plot(modsig);title('modulated sg.');
subplot(2,4,3), plot(noise);title('noise signal');
subplot(2,4,4),plot(noiseadded);title('Noise added');
subplot(2,4,5), plot(z2); title('Demodulated Signal via filter');
subplot(2,4,6), plot(z1); title('Demodulated Signal nofilter');
subplot(2,4,7), plot(check); title('Filtered nonoise signal')
subplot(2,4,8), plot(nonoise);title('noisy sig passed frm filter');